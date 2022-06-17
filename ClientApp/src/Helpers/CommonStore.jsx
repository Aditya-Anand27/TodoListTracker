import { useContext, createContext  } from "react";
import agent from "../components/agents/agentsignin";
import { makeAutoObservable, reaction } from "mobx"
import { withRouter } from 'react-router-dom'    


export default class CommonStore{
    token = window.localStorage.getItem("jwt");
    appLoaded = false;
    
    constructor(){
        makeAutoObservable(this);

        reaction(
            () => this.token,
            token => {
                if(token){
                    window.localStorage.setItem("jwt", token);
                }
                else{
                    window.localStorage.removeItem("jwt");
                }
            }
        )
    }

    
    setToken = (token) => {
        if(token){
            this.token = token;
        }
    }

    setAppLoaded = () => {
        this.appLoaded = true;
    }
}
