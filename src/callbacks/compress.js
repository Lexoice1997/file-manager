import { createReadStream, createWriteStream } from "fs"
import { resolve } from "node:path"
import { cwd } from "node:process"
import { createGzip } from "zlib"

import { errorMsg } from "../const/errorMsg.js"
import currentDirectory from "../helpers/currentDirectory.js"

const compressHandler = async (pathToFile, pathToDestination) => {
  try {
    const gzip = createGzip()
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

export default compressHandler
