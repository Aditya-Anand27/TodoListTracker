/* eslint-disable */ 

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
    list: () => requests.get("/todosignins"),
    read: (id) => requests.get(`/todosignins/${id}`),
    create: (act) => requests.post(`/todosignins`, act),
    update: (id, act) => requests.put(`/todosignins/${id}`, act),
    del: (id) => requests.del(`/todosignins/${id}`),
}

const agent = {
    Activities
}

export default agent;
