import { cpus, EOL, userInfo } from "node:os"
import { arch } from "node:process"

import { errorMsg } from "../const/errorMsg.js"
import currentDirectory from "../helpers/currentDirectory.js"

async function osCallback(param) {
  try {
    if (!param) throw new Error("parameter is not specified")

    const { username, homedir } = userInfo()
    const cpusInfo = cpus().map(({ model, speed }) => {
      speed = `${speed / 1000}GHz`
      return { model, speed }
    })

    const osInfo = {
      "--EOL": EOL,
      "--cpus": cpusInfo,
      "--homedir": homedir,
      "--username": username,
      "--architecture": arch,
    }

    if (!osInfo[param]) throw new Error(`no such parameter`)

    console.table(osInfo[param])
    currentDirectory()
  } catch (error) {
    console.error(errorMsg)
  }
}

export default osCallback
