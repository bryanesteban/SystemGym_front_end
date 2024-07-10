// import axios from "axios";
import axios from "../apis/generalApi";

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