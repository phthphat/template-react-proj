import { ActionMap } from "../actionType";
import { NavigationPage, Theme } from "../app/appContext";

export enum UserActionType {
    setTheme = "USER_SET_THEME",
    // getTheme = "USER_GET_THEME",
    setToken = "USER_SET_TOKEN",
    // getToken = "USER_GET_TOKEN",
    increaseNumber = "USER_INCREASE_NUMBER",
    visitPage = "USER_VISIT_PAGE",
    logInSuccess = "USER_LOGIN_SUCCESS",
    logInFailed = "USER_LOGIN_FAILED",
    modifyCart = "USER_MODIFY_CART",
    setCart = "USER_SET_CART",
    removeCart = "USER_REMOVE_CART_ITEM"
}

type UserPayload = {
    [UserActionType.setTheme]: {
        token?: string;
        theme: Theme;
    };
    [UserActionType.setToken]: {
        token?: string;
    };
    [UserActionType.increaseNumber]: {};
    [UserActionType.visitPage]: {
        page: NavigationPage;
    };
    [UserActionType.logInSuccess]: {
        urlImage?: string
        name?: string
        token: string
    }
    [UserActionType.logInFailed]: {}
    [UserActionType.modifyCart]: {
        actionType: 'add' | 'delete'
        itemId: string,
        quantity: number
    },
    [UserActionType.setCart]: {
        items: { id: string, quantity: number }[]
    },
    [UserActionType.removeCart]: {
        productId: string
    }
};

export type UserAction = ActionMap<UserPayload>[keyof ActionMap<UserPayload>];
