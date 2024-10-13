import { stdout } from "process"
import { username } from "../const/userName.js"

const welcomeProcess = () => {
  stdout.write(`Welcome to the File Manager, ${username}\n`)
}

export default welcomeProcess
