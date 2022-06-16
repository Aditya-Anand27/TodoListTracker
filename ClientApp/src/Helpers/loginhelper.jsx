import { useContext, createContext, useHistory  } from "react";
import agent from "../components/agents/agentsignin";
import { makeAutoObservable, runInAction } from "mobx"
import CommonStore from "./CommonStore";
import History from "../History";



export default class UserStore{
    user = null;

    constructor(){
        makeAutoObservable(this);
    }

    get isLoggedIn(){
        return !!this.user;
    }

    login = async (creds) => {
        try{
            console.log(creds);
            const user = await agent.Activities.login(creds);
            store.commonStore.setToken(user.Token);
            runInAction(() => this.user = user);
            console.log("Here");
            History.push('/today');
        }
        catch(error){
            throw error;
        }
    }
}

export const store = {
    userStore: new UserStore(),
    commonStore: new CommonStore()
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}