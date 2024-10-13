import { createReadStream, createWriteStream } from "fs"
import { resolve } from "node:path"
import { cwd } from "node:process"
import { createUnzip } from "zlib"

import { errorMsg } from "../const/errorMsg.js"
import currentDirectory from "../helpers/currentDirectory.js"

const decompressHandler = async (pathToFile, pathToDestination) => {
  try {
    const gzip = createUnzip()
    const streamPathFile = resolve(cwd(), pathToFile)
    const streamPathToDestination = resolve(cwd(), pathToDestination)

    const readStream = createReadStream(streamPathFile)
    const writeStream = createWriteStream(streamPathToDestination)
    readStream.pipe(gzip).pipe(writeStream)
  } catch (error) {
    console.error(errorMsg)
  } finally {
    currentDirectory()
  }
}

export default decompressHandler
