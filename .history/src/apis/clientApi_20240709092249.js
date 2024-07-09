import axios from "axios";
import generalApi from "./generalApi";


const clientApi = axios.create({
    baseURL: generalApi+'/clients'
});

export default clientApi;