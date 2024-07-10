import axios from "axios";


const generalApi = axios.create({
    generalURL:'http://localhost:8080'
});

export default generalApi;