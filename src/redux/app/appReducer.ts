import { SystemAction } from "../system/systemAction";
import { UserAction } from "../user/userAction";
import { UserReducer as userReducer } from "../user/userReducer";
import { SystemReducer as systemReducer } from "../system/systemReducer";
import { AppState } from "./appContext";

export type AppAction = UserAction | SystemAction

export const AppReducer = (state: AppState, action: AppAction): AppState => {
    console.log(action)
    return {
        userState: userReducer(state.userState, action as UserAction),
        systemState: systemReducer(state.systemState, action as SystemAction)
    };
};
