import axios from 'axios';
import {Host} from '@/config/env';
const http = axios.create({
    baseURL: Host,
    timeout: 20000,
    withCredentials: true
});
axios.defaults.headers.post['Content-Type'] = 'application/json';
http.interceptors.request.use(config => {
    return config;
}, error => {
    return Promise.reject(error);
});
export default http;