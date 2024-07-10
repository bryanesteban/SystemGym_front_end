import axios from "axios";


const instance  = axios.create({
    baseURL:'http://localhost:8080'
});


instance.interceptors.request.use( config => {
    config.headers = {
        ...config.headers,
        'Authorization':sessionStorage.getItem('token'),
    }
    return config;
});

export default instance;