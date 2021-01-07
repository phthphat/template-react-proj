import React, { createContext, useContext, useEffect, useReducer } from "react";
import { SystemState } from "../system/systemReducer";
import { UserActionType } from "../user/userAction";
import { UserState } from "../user/userReducer";
import { AppAction, AppReducer } from "./appReducer";

export interface AppContextType {
    state: AppState,
    dispatch: React.Dispatch<AppAction>
}

export interface AppState {
    userState: UserState
    systemState: SystemState
}

export enum Theme {
    light = "light",
    dark = "dark",
}

export enum NavigationPage {
    memo,
    gallery,
    about,
    home
}

const initState: AppState = {
    userState: {
        theme: Theme.light,
        info: {},
        _number: 0,
        cart: []
    },
    systemState: {}
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const useAppContext = () => useContext(AppContext)

export const AppProvider: React.FC = ({ children }) => {

    // let [state, setState] = useState(initState)
    let [state, dispatch] = useReducer(AppReducer, initState)

    useEffect(() => {
        if (localStorage["theme"] === undefined) {
            localStorage["theme"] = Theme.light
        }
        let theme: Theme = localStorage["theme"]
        dispatch({
            type: UserActionType.setTheme,
            payload: {
                theme: theme
            }
        })
        dispatch({
            type: UserActionType.setToken,
            payload: {
                token: localStorage["token"]
            }
        })

        if (localStorage["cart"] !== undefined) {
            console.log(`asdf ${typeof localStorage["cart"]}`)
            try {
                var object = JSON.parse(localStorage["cart"])
                dispatch({
                    type: UserActionType.setCart,
                    payload: {
                        items: object
                    }
                })
            } catch (error) {
                dispatch({
                    type: UserActionType.setCart,
                    payload: {
                        items: []
                    }
                })
            }
        } else {
            dispatch({
                type: UserActionType.setCart,
                payload: {
                    items: []
                }
            })
        }
    }, [])

    return <AppContext.Provider value={{ state, dispatch }}>
        {children}
    </AppContext.Provider>
};
