/* eslint-disable */ 
import React, { useState, useEffect } from 'react';
import agent from '../agents/agentsignin';
import { useHistory } from "react-router-dom";


/* eslint-disable */ 


export default function HomePage() {
    const [un, setun] = useState("");
    const [up, setup] = useState("");
    const [actlist,setactlist] = useState([])
    const history = useHistory();


    useEffect(() => {
        const fetchData = async () => {
            const data = await agent.Activities.list();
            setactlist(data);
          }
          fetchData();
      }, [un]);

    const useHistoryToRedirect = () => {
        history.push("/today")  
    }
   

    function handleOnClick(){

        event.preventDefault();

        for(let i=0;i<actlist.length;i++){
            if(actlist[i].userName==un && actlist[i].password==up){
              useHistoryToRedirect();
            }
        }
    }

    function handleChange(event) {
        setun(event.target.value);
        console.log(un);
      }

      function handleChangepass(event) {
        setup(event.target.value);
      }


    

    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form>
                    <label>Username or email address</label><br/>
                    <input type="text" value={un} required onChange={handleChange}/>
                <p>
                    <label>Password</label>
                    <br/>
                    <input type="password" value={up}  required onChange={handleChangepass}/>
                </p>
                <p>
                    <button id="sub_btn" onClick={() => handleOnClick()}>Login</button>
                </p>
            </form>
        </div>
    )
}