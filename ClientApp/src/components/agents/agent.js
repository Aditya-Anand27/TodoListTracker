/* eslint-disable */ 

import axios from 'axios';
import commonStore from '../../Helpers/loginhelper';


axios.defaults.baseURL = "https://localhost:7205/api";


axios.interceptors.request.use(config => {
    const token = commonStore.token;
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
})

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

export default agent;
