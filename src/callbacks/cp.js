import { createReadStream, createWriteStream } from "node:fs"
import { parse, resolve } from "node:path"
import { pipeline } from "node:stream/promises"

import { errorMsg } from "../const/errorMsg.js"
import currentDirectory from "../helpers/currentDirectory.js"

const cpCallback = async (pathToFile, pathToNewDirectory) => {
  try {
    pathToFile = resolve(pathToFile)
    console.log(pathToFile, pathToNewDirectory)

    const { base } = parse(pathToFile)
    pathToNewDirectory = resolve(pathToNewDirectory, base)
    const readableStream = createReadStream(pathToFile)
    const writableStream = createWriteStream(pathToNewDirectory)
    await pipeline(readableStream, writableStream)
    currentDirectory()
  } catch (error) {
    console.error(errorMsg)
  }
}

export default cpCallback
