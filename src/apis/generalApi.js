import axios from "axios";


const generalApi = axios.create({
    baseURL:'http://localhost:8080'
});

export default generalApi;