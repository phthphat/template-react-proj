import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import Footer from './components/footer/footer';
import Nav from './components/nav/nav';
import LocalStorage from './helper/local-storage';
import About from './pages/about/about';
import { Homepage } from './pages/homepage/homepage';
import { NotFound } from './pages/not-found/not-found';
import { CartItem, cartState, Theme, themeState } from './state/user-state';

const App = () => {

  let setTheme = useSetRecoilState(themeState)
  let setCart = useSetRecoilState(cartState)

  useEffect(() => {
    let curTheme = LocalStorage.get<Theme>("theme");//getLocalStorage("theme")
    let curCart = LocalStorage.get<CartItem[]>("cart");

    if (!curTheme) {
      curTheme = "light"
      LocalStorage.set("theme", "light")
    }
    setTheme(curTheme)

    if (!curCart) {
      curCart = []
      LocalStorage.set("cart", [])
    }
    setCart(curCart)

  }, [setTheme, setCart])

  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
