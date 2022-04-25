import axios from 'axios'
import { baseUrl } from '../../config';


export function initialAxios(){

    axios.defaults.baseURL = baseUrl;
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.defaults.headers.post['Upgrade-Insecure-Requests']=1;

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