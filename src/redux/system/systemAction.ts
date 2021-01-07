import { ActionMap } from "../actionType"

export enum SystemActionType {
    showMsg = "SYSTEM_SHOw_MESSAGE",
    hideMsg = "SYSTEM_HIDE_MESSAGE"
}

type SystemPayload = {
    [SystemActionType.showMsg]: {
        text: string
        type: MsgType
    },
    [SystemActionType.hideMsg]?: {}
}

export type MsgType = 'error' | 'notice' | 'warning'


export type SystemAction = ActionMap<SystemPayload>[keyof ActionMap<SystemPayload>];