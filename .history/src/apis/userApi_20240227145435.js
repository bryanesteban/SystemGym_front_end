import axios from "axios";

const userApi = axios.create({
    baseUrl = 'http://localhost:8080/users';
})