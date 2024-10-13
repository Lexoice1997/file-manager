import { rename } from "fs/promises"

import { errorMsg } from "../const/errorMsg.js"
import currentDirectory from "../helpers/currentDirectory.js"

const rnCallback = async (pathToFile, newFileName) => {
  try {
    await rename(pathToFile, newFileName)
  } catch (error) {
    console.error(errorMsg)
  } finally {
    currentDirectory()
  }
}

export default rnCallback
