/* eslint-disable */ 
import React, { useState } from 'react';
import agent from './agents/agent';
/* eslint-disable */ 
const [get1, setget] = useState<any>([]);


const callYourAPI = async () => {
    const activities = await agent.Activities.list();
    setget([activities]);
};


export default function HomePage() {
    
    return (
        <>
        <p>Hello</p>
        <div className="Hello" >
            <button onClick={callYourAPI}>
                GET
            </button>
            {get1}
        </div>
        </>
    )
}