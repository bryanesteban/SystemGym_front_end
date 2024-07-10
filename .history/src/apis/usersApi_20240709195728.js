import axios from "axios";
import generalApi from "./generalApi";

const usersApi = axios.create({
    baseURL : generalApi+'http://localhost:8080/users'
});

usersApi.interceptors.request.use( config => {
    config.headers = {
        ...config.headers,
        'Authorization':sessionStorage.getItem('token'),
    }
    return config;
});

export default usersApi;