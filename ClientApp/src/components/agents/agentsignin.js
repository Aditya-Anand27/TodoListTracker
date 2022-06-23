/* eslint-disable */ 

import axios from 'axios';
import commonStore from '../../Helpers/loginhelper';

axios.defaults.baseURL = "https://localhost:7205/api";

const responseBody = (response) => response.data;

axios.interceptors.request.use(config => {
    const token = commonStore.token;
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
})

const requests = {
    get: (url) => axios.get(url).then(responseBody),
    post: (url, body) => axios.post(url, body).then(responseBody),
    put: (url, body) => axios.put(url, body).then(responseBody),
    del: (url) => axios.delete(url).then(responseBody),
}

const Activities = {
    current: () => requests.get("/account"),
    login: (user) => requests.post(`/account/login`, user),
    register: (user) => requests.post(`/account/register`, user),
}

const agent = {
    Activities
}

export default agent;
