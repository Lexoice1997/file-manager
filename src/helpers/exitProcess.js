import { exit, stdout } from "process"

import { username } from "../const/userName.js"

const exitProcess = () => {
  new Promise((res) => {
    stdout.write(`Thank you for using File Manager, ${username}, goodbye!`)
    res()
  }).then(() => exit(0))
}

export default exitProcess
