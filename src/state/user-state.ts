import { atom } from "recoil"

export type Theme = "dark" | "light" | "auto"
export const themeState = atom<Theme>({
  key: "USER_THEME_STATE",
  default: "auto"
})

export type NavPage = "home" | "about"
export const navPageState = atom<NavPage | null>({
  key: "USER_NAV_PAGE",
  default: null
})

export interface UserInfo {
  urlImage?: string
  name?: string
  token?: string
}
export const userInfoState = atom<UserInfo | null>({
  key: "USER_USERINFO",
  default: null
})

export type CartItem = { id: string, quantity: number }
export const cartState = atom<CartItem[]>({
  key: "USER_CART",
  default: []
})

export const countState = atom<number>({
  key: "USER_COUNT",
  default: 0
})