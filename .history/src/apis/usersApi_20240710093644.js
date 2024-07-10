import axios from "axios";

axios.defaults.baseURL= 'http://localhost:8080'

const usersApi = axios.create({
    url :'/users'
});

usersApi.interceptors.request.use( config => {
    config.headers = {
        ...config.headers,
        'Authorization':sessionStorage.getItem('token'),
    }
    return config;
});

export default usersApi;