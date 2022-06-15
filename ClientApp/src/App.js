/* eslint-disable */ 
import React, { useState } from 'react';
import axios from 'axios';
import {Route, BrowserRouter, Link} from 'react-router-dom';
import {Button} from 'semantic-ui-react';
import TopMenu from './components/Navbar';
import MainPage from './components/today/MainPage';
import MainPageInc from './components/incomplete/MainPage';
import Login from './components/login/Login';

export default function App() {
  
    return (
        <>
        <TopMenu/>
        <Route exact path='/today' component={MainPage} />
        <Route exact path='/incomplete' component={MainPageInc} />
        <Route exact path='/login' component={Login} />
        </>
    )
}