import { atom } from "recoil"

export type MsgType = 'error' | 'notice' | 'warning'
export type Message = { text: string, type: MsgType }
export const messageState = atom<Message | null>({
  key: "SYSTEM_MESSAGE",
  default: null
})