import { useContext, createContext  } from "react";
import agent from "../components/agents/agentsignin";
import { makeAutoObservable } from "mobx"
import { withRouter } from 'react-router-dom'    


export default class CommonStore{
    token = null;
    appLoaded = false;
    
    constructor(){
        makeAutoObservable(this);
    }

    setToken = (token) => {
        if(token){
            window.localStorage.setItem('jwt', token);
            this.token = token;
        }
    }

    setAppLoaded = () => {
        this.appLoaded = true;
    }
}
