import { useContext, createContext, useHistory  } from "react";
import agent from "../components/agents/agentsignin";
import { makeAutoObservable, runInAction } from "mobx"
import CommonStore from "./CommonStore";
import History from "../History";
import ModalStore from "./Modalstore";



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
            const user = await agent.Activities.login(creds);
            store.commonStore.setToken(user.Token);
            runInAction(() => this.user = user);
            History.push('/today');
            store.modalStore.closeModal();
        }
        catch(error){
            throw error;
        }
    }

    logout = () =>{
        store.commonStore.setToken(null);
        window.localStorage.removeItem("jwt");
        this.user= null;
        History.push('/');
        store.modalStore.closeModal();
    }

    getUser = async () => {
        try{
            const user = await agent.Activities.current();
            runInAction(() => this.user = user);
        } catch(error){
            console.log(error);
        }
    }
}

export const store = {
    userStore: new UserStore(),
    commonStore: new CommonStore(),
    modalStore: new ModalStore()
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}