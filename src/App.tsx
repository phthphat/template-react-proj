import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import Footer from './components/footer/footer';
import Nav from './components/nav/nav';
import LocalStorage from './helper/local-storage';
import { RequireLogined } from './middleware/require-logined';
import About from './pages/about/about';
import { Homepage } from './pages/homepage/homepage';
import Login from './pages/login/login';
import { NotFound } from './pages/not-found/not-found';
import Tailwind from './pages/tailwind/tailwind';
import CallBackRecoil from './pages/usecallback-recoil/callback-recoil';
import { CartItem, cartState, Theme, themeState } from './state/user-state';

const App = () => {

  let setTheme = useSetRecoilState(themeState)
  let setCart = useSetRecoilState(cartState)
  // let location = useLocation()
  // console.log(location)
  // const transition = useTransition(location, location => location.pathname, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { display: 'none' },
  //   config: { duration: 500 }
  // })

  useEffect(() => {
    let curTheme = LocalStorage.get<Theme>("theme");
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

  return <>
    <Nav />
    {/* {
      transition.map((val) => (
        <animated.div key={val.key} style={val.props}>
          <Switch location={val.item}>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/about" component={About} />
            <Route path="/callback-recoil" component={CallBackRecoil} />
            <Route component={NotFound} />
          </Switch>
        </animated.div>
      ))
    } */}
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/about" component={About} />
      <Route exact path="/callback-recoil" component={RequireLogined(CallBackRecoil)} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/tailwind" component={Tailwind} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </>
}

export default App;
