import axios from 'axios'
import { baseUrl } from '../../config';


export function initialAxios(){

    axios.defaults.baseURL = baseUrl;
    axios.defaults.headers.post['Content-Type'] = 'application/json';

    axios.interceptors.request.use(request => {
        return request;
    },error => {
        return Promise.reject(error)
    });

    axios.interceptors.response.use(response => {
        return response;
    },error => {
        return Promise.reject(error)
    });

}