import axios from "axios";
import generalApi from "./generalApi";
import usersApi from "./usersApi";


const clientApi = axios.create({
    baseURL: generalApi+'/clients'
});

export default usersApi;