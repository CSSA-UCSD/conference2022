// https://stackoverflow.com/questions/41956465/how-to-create-multiple-page-app-using-react

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Speakers from './pages/Speakers';
import Register from './pages/Register';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/schedule' component={Schedule}></Route>
      <Route exact path='/speakers' component={Speakers}></Route>
      <Route exact path='/register' component={Register}></Route>
    </Switch>
  );
}

export default Main;