import axios from "axios";

export const findAll = () =>{

    const response = await axios.get('http://localhost:8080/useres');

}