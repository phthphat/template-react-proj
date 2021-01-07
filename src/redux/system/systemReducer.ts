import { UserActionType } from "../user/userAction";
import { MsgType, SystemAction, SystemActionType } from "./systemAction";

export interface SystemState {
    message?: {
        text: string,
        type: MsgType
    }
}

export const SystemReducer = (state: SystemState, action: SystemAction): SystemState => {
    let newState = { ...state }
    // console.log(action.payload)
    switch (action.type) {
        case SystemActionType.showMsg:
            newState.message = action.payload
            break
        case SystemActionType.hideMsg:
            newState.message = undefined
            break
    }
    return newState
}