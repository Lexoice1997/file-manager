import { cwd } from "node:process"

export default function currentDirectory() {
  console.info(`You are currently in ${cwd()}`)
}
