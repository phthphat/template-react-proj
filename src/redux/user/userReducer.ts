import { NavigationPage, Theme } from "../app/appContext";
import { UserAction, UserActionType } from "./userAction";

export interface UserState {
    theme: Theme;
    info: {
        urlImage?: string
        name?: string
        token?: string
    };
    cart: { id: string, quantity: number }[]
    page?: NavigationPage;
    _number: number;
}
let maxQuantity = 3
export const UserReducer = (
    state: UserState,
    action: UserAction
): UserState => {
    let newState = { ...state };
    switch (action.type) {
        case UserActionType.setTheme:
            newState.theme = action.payload.theme;
            break;
        case UserActionType.setToken:
            newState.info.token = action.payload.token;
            break;
        case UserActionType.increaseNumber:
            newState._number = newState._number + 1;
            break;
        case UserActionType.visitPage:
            newState.page = action.payload.page;
            break;
        case UserActionType.logInSuccess:
            newState.info = { ...action.payload }
            break;
        case UserActionType.logInFailed:
            break;
        case UserActionType.modifyCart:
            let existItems = newState.cart
            let payload = action.payload
            let existIndex = existItems.findIndex(val => { return val.id === payload.itemId })
            if (existIndex !== -1) {
                //mean exist
                console.log(`quantity ${existItems[existIndex].quantity}`)
                let oldQuantity = existItems[existIndex].quantity
                oldQuantity += payload.actionType === 'add' ? payload.quantity : -1 * payload.quantity
                if (oldQuantity > maxQuantity) {
                    alert("Mua xỉ liên hệ")
                } else {
                    existItems[existIndex].quantity = oldQuantity
                }
                if (oldQuantity <= 0) {
                    existItems.splice(existIndex, 1)
                }

            } else {
                if (payload.actionType === 'add') {
                    existItems.push({
                        id: payload.itemId,
                        quantity: payload.quantity
                    })
                }
            }
            localStorage["cart"] = JSON.stringify(existItems)
            break
        case UserActionType.setCart:
            newState.cart = action.payload.items
            break
        case UserActionType.removeCart:
            let id = action.payload.productId
            let firstIndex = newState.cart.findIndex(val => { return val.id === id })
            console.log(`firstindex: ${firstIndex}`)
            if (firstIndex !== -1) {
                newState.cart.splice(firstIndex, 1)
            }
            localStorage["cart"] = JSON.stringify(newState.cart)
            break
    }
    console.log(`New state: `)
    console.log(newState)
    return newState;
};
