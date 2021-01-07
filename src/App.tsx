import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/footer/footer';
import Nav from './components/nav/nav';
import { Homepage } from './pages/homepage/home-page';
import { NotFound } from './pages/not-found/not-found';

const App = () => {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
