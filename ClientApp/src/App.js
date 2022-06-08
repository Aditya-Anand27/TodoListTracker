/* eslint-disable */ 
import React, { useState } from 'react';
import axios from 'axios';
import {Route, BrowserRouter, Link} from 'react-router-dom';
import HomePage from './HomePage';
import {Button} from 'semantic-ui-react';
import TopMenu from './components/Navbar';
import MainPage from './components/today/MainPage';
import MainPageInc from './components/incomplete/MainPage';

export default function App() {
  
    return (
        <>
        <TopMenu/>
        <Route exact path='/today' component={MainPage} />
        <Route exact path='/incomplete' component={MainPageInc} />
        </>
    )
}