import { env } from "process"

export const username = env?.npm_config_username ?? "stranger"
