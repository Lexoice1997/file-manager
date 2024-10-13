import { createReadStream } from "node:fs"
import { resolve } from "node:path"
import { pipeline } from "node:stream/promises"

import { errorMsg } from "../const/errorMsg.js"
import currentDirectory from "../helpers/currentDirectory.js"
import { customOutput } from "../helpers/customOutput.js"

const catCallback = async (pathToDirectory) => {
  try {
    const pathToFile = resolve(pathToDirectory)
    const readableStream = createReadStream(pathToFile, { encoding: "utf8" })
    await pipeline(readableStream, customOutput())
    currentDirectory()
  } catch (error) {
    console.error(errorMsg)
  }
}

export default catCallback
