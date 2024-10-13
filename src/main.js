import { EventEmitter } from "node:events"
import { stdin } from "process"

import addCallback from "./callbacks/add.js"
import catCallback from "./callbacks/cat.js"
import cdCallback from "./callbacks/cd.js"
import compressHandler from "./callbacks/compress.js"
import decompressHandler from "./callbacks/decompress.js"
import hashCallback from "./callbacks/hash.js"
import lsCallback from "./callbacks/ls.js"
import mvCallback from "./callbacks/mv.js"
import osCallback from "./callbacks/os.js"
import rmCallback from "./callbacks/rm.js"
import rnCallback from "./callbacks/rn.js"
import upCallback from "./callbacks/up.js"
import {
  oneLengthCommands,
  osCommands,
  threeLengthCommands,
  twoLengthCommands,
} from "./const/commandsArr.js"
import { errorMsg } from "./const/errorMsg.js"
import currentDirectory from "./helpers/currentDirectory.js"
import exitProcess from "./helpers/exitProcess.js"
import welcomeProcess from "./helpers/welcomeProcess.js"
import cpCallback from "./callbacks/cp.js"

const myEmitter = new EventEmitter()

myEmitter
  .on("cd", cdCallback)
  .on("up", upCallback)
  .on("ls", lsCallback)
  .on("cat", catCallback)
  .on("add", addCallback)
  .on("rn", rnCallback)
  .on("cp", cpCallback)
  .on("mv", mvCallback)
  .on("rm", rmCallback)
  .on("--EOL", osCallback)
  .on("--cpus", osCallback)
  .on("--homedir", osCallback)
  .on("--username", osCallback)
  .on("--architecture", osCallback)
  .on("hash", hashCallback)
  .on("compress", compressHandler)
  .on("decompress", decompressHandler)

welcomeProcess()

stdin.on("data", (data) => {
  try {
    const [command, ...args] = data
      .toString()
      .split(" ")
      .map((item) => item.trim())

    if (oneLengthCommands.includes(command) && args.length === 0) {
      myEmitter.emit(command, ...args)
    } else if (twoLengthCommands.includes(command) && args.length === 1) {
      myEmitter.emit(command, ...args)
    } else if (threeLengthCommands.includes(command) && args.length === 2) {
      myEmitter.emit(command, ...args)
    } else if (command === "os" && osCommands.includes(args[0])) {
      myEmitter.emit(args[0], args[0])
    } else if (command === ".exit") {
      exitProcess()
    }
  } catch (error) {
    console.error(errorMsg)
  }
})

currentDirectory()

process.on("SIGINT", () => {
  exitProcess()
})
