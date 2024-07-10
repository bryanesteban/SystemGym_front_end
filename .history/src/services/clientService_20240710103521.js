import clientApi from "../apis/clientApi";


export const findAllClient = async() => {

    try{

        const response = await clientApi.get();
        return response;

    }catch(error){

        console.log('Error fetching data:',error);
        throw error;
        
    }

}