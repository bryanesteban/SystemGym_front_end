import axios from "axios";
import generalApi from "./generalApi";


const clientApi = axios.create({
    clientURL: generalApi+'/clients'
});

export default clientApi;