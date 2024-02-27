import axios from "axios";

const userApi = axios.create({
    baseUrl : 'http://localhost:8080/users'
});

userApi.interceptors.request.use( config => {
    config.headers = {
        ...config.headers,
        'Authorization':sessionStorage.getItem('token'),
    }
    return config;
})