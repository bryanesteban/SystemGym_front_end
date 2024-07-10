import axios from "axios";
import generalApi from "./generalApi";


const clientApi = axios.create({
    clientURL: generalApi.generalURL+'/clients'
});

export default clientApi;