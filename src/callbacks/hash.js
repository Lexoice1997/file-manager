import { createReadStream } from "fs"
import { createHash } from "node:crypto"
import { resolve } from "node:path"
import { pipeline } from "node:stream/promises"

import { errorMsg } from "../const/errorMsg.js"
import currentDirectory from "../helpers/currentDirectory.js"
import { customOutput } from "../helpers/customOutput.js"

const hashCallback = async (filename) => {
  try {
    const hash = createHash("sha256")
    const pathFile = resolve(filename)
    const stream = createReadStream(pathFile, "utf-8")
    await pipeline(stream, hash.setEncoding("hex"), customOutput())
  } catch (error) {
    console.error(errorMsg)
  } finally {
    currentDirectory()
  }
}

export default hashCallback
