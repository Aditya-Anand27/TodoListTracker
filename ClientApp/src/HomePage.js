/* eslint-disable */ 
import React, { useState } from 'react';
import axios from 'axios';

axios.defaults.baseURL = "https://localhost:7205/api";

const responseBody = (response) => response.data;

const requests = {
    get: (url) => axios.get(url).then(responseBody),
    post: (url, body) => axios.post(url, body).then(responseBody),
    put: (url, body) => axios.put(url, body).then(responseBody),
    del: (url) => axios.delete(url).then(responseBody),
}

const Activities = {
    list: () => requests.get("/todoitems"),
    read: (id) => requests.get(`/todoitems/${id}`),
    create: (act) => requests.post(`/todoitems`, act),
    update: (id, act) => requests.put(`/todoitems/${id}`, act),
    del: (id) => requests.del(`/todoitems/${id}`),
}

const agent = {
    Activities
}

/* eslint-disable */ 



export default function HomePage() {
  const [get1, setget] = useState([]);

  const callYourAPI = async () => {
      const activities = await agent.Activities.list();
      let string = "";
      activities.forEach(activity => string = string + activity.name);
      setget([string]);
  };

  const sendavalue = async () => {
    await agent.Activities.create({Name: "Chelsk", isComplete: true});
};

 const delact = async (no) => {
      await agent.Activities.del(no);
  };
    return (
        <>
        <p>Hello</p>
        <div className="Hello" >
            <button onClick={callYourAPI}>
                GET
            </button>
            {get1}
            <br/>
            <button onClick={sendavalue}>
                PUT
            </button>
            <br/>
            <button onClick={() => delact(16)}>
                DEL
            </button>
            {get1}
        </div>
        </>
    )
}