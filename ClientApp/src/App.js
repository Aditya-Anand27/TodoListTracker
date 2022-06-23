/* eslint-disable */ 
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Route, BrowserRouter, Link} from 'react-router-dom';
import {Button, Loader} from 'semantic-ui-react';
import TopMenu from './components/Navbar';
import MainPage from './components/today/MainPage';
import MainPageInc from './components/incomplete/MainPage';
import Login from './components/login/Login';
import HomePage from './Homepage';
import { observer } from "mobx-react";
import { useStore } from './Helpers/loginhelper';
import ModalContainer from './Helpers/ModalContainer';

export default observer(function App() {

    const {userStore, commonStore} = useStore();

    useEffect(() => {
        console.log("Here");
        if(commonStore.token){
            userStore.getUser().finally(() => commonStore.setAppLoaded());
        }
        else{
            console.log("Here");
            commonStore.setAppLoaded();
        }
    }, [commonStore, userStore])

    if(!commonStore.appLoaded) return <Loader/>
    return (
        <>
        <ModalContainer/>
        <TopMenu/>
        <Route exact path='/today' component={MainPage} />
        <Route exact path='/incomplete' component={MainPageInc} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={HomePage} />
        </>
    )
})