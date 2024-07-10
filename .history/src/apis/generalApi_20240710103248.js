import axios from "axios";


const instance  = axios.create({
    baseURL:'http://localhost:8080'
});

instance.defaults.headers.common['Authorization'] = 'Auth From instance';

instance.interceptors.request.use( config => {
    config.headers = {
        ...config.headers,
        'Authorization':sessionStorage.getItem('token'),
    }
    return config;
});

export default instance;