import { readdir } from "node:fs/promises"
import { resolve } from "node:path"
import { cwd } from "node:process"

import { errorMsg } from "../const/errorMsg.js"
import currentDirectory from "../helpers/currentDirectory.js"

const lsCallback = async () => {
  try {
    const path = resolve(cwd())
    const files = await readdir(path)
    console.table(files)
    currentDirectory()
  } catch (error) {
    console.error(errorMsg)
  }
}

export default lsCallback
