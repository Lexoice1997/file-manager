import { open } from "node:fs/promises"
import { resolve } from "node:path"
import { cwd } from "node:process"

import { errorMsg } from "../const/errorMsg.js"
import currentDirectory from "../helpers/currentDirectory.js"

const addCallback = async (addNewFile) => {
  let filehandle
  try {
    const pathToFile = resolve(cwd(), addNewFile)
    filehandle = await open(pathToFile, "w")
  } catch (error) {
    console.error(errorMsg)
  } finally {
    filehandle?.close()
  }

  currentDirectory()
}

export default addCallback
