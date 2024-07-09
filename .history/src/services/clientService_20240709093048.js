import clientApi from "../apis/clientApi";


export const findAllClient = async() => {

    try{
        const response = await clientApi.get();
        return response;
    }catch(error){
        throw error;
    }

}