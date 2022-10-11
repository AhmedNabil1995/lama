
import axios from "axios";

const url = 'http://localhost:8000';

export const publicRequest = axios.create({
    baseURL : url
})

export const userRequest = axios.create({
    baseURL : url,
    headers: {token:''},
})