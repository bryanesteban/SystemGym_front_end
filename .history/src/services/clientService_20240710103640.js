import clientApi from "../apis/clientApi";

const BASE_URL = '/clients';

export const findAllClient = async() => {

    try{

        const response = await clientApi.get(BASE_URL);
        return response;

    }catch(error){

        console.log('Error fetching data:',error);
        throw error;
        
    }

}