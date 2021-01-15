import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import Footer from './components/footer/footer';
import Nav from './components/nav/nav';
import { getLocalStorage, setLocalStorage } from './helper/local-storage';
import About from './pages/about/about';
import { Homepage } from './pages/homepage/homepage';
import { NotFound } from './pages/not-found/not-found';
import { cartState, themeState } from './state/user-state';

const App = () => {

  let setTheme = useSetRecoilState(themeState)
  let setCart = useSetRecoilState(cartState)

  useEffect(() => {
    let curTheme = getLocalStorage("theme")
    let curCart = getLocalStorage("cart")

    if (!curTheme) {
      curTheme = "light"
      setLocalStorage("theme", "light")
    }
    setTheme(curTheme)

    if (!curCart) {
      curCart = []
      setLocalStorage("cart", [])
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
