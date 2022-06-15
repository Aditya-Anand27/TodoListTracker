import agent from "../components/agents/agentsignin";

export default class UserStore{
    user = null;

    isLoggedIn = () => {
        return !!this.user;
    }

    login = async (creds) => {
        try{
            const user = await agent.Activities.login(creds);
            console.log(user);
        }
        catch(error){
            throw error;
        }
    }
}