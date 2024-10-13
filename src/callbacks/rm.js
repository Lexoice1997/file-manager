import { rm } from "fs/promises"
import { resolve } from "node:path"

import { errorMsg } from "../const/errorMsg.js"
import currentDirectory from "../helpers/currentDirectory.js"

const rmCallback = async (pathToFile) => {
  try {
    const newPath = resolve(pathToFile)

    await rm(newPath)
  } catch (error) {
    console.error(errorMsg)
  } finally {
    currentDirectory()
  }
}

export default rmCallback
