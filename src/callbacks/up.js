import { chdir } from "node:process"

import { errorMsg } from "../const/errorMsg.js"
import currentDirectory from "../helpers/currentDirectory.js"

const upCallback = () => {
  try {
    chdir("..")

    currentDirectory()
  } catch (error) {
    console.error(errorMsg)
  }
}

export default upCallback
