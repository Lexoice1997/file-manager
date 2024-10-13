import { chdir } from "node:process"

import { errorMsg } from "../const/errorMsg.js"
import currentDirectory from "../helpers/currentDirectory.js"

const cdCallback = async (pathToDirectory) => {
  try {
    chdir(pathToDirectory)

    currentDirectory()
  } catch (error) {
    console.error(errorMsg)
  }
}

export default cdCallback
