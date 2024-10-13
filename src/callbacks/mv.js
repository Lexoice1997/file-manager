import { copyFile, rm } from "fs/promises"
import { resolve } from "node:path"
import { cwd } from "node:process"

import { errorMsg } from "../const/errorMsg.js"
import currentDirectory from "../helpers/currentDirectory.js"

const mvCallback = async (pathToFile, moveFolderName) => {
  try {
    const oldPath = resolve(cwd(), pathToFile)
    const newPath = resolve(cwd(), moveFolderName, pathToFile)
    await copyFile(oldPath, newPath)
    await rm(oldPath)
  } catch (error) {
    console.error(errorMsg)
  } finally {
    currentDirectory()
  }
}

export default mvCallback
