import Swal from "sweetalert2";
import generalApi from "../apis/generalApi";

const BASE_URL = '/clients';

export const findAllClient = async() => {

    try{
        console.log("llega hasta el servicio");
        const response = await generalApi.get(BASE_URL);
        return response;

    }catch(error){

        console.log('Error fetching data:',error);
        throw error;
        
    }

}

export const save = async ({identification, name, lastName, address, phone_number, email, date_birthday, inscription_date}) => {


    const DateNow = new Date(); 
    inscription_date = DateNow.toLocaleDateString('en-CA');  
    // DateNow.getFullYear()+"-"+(DateNow.getMonth()+1)+"-"+DateNow.getDate();

    // eslint-disable-next-line no-useless-catch
    try {
        return await generalApi.post(BASE_URL,{
            identification,
            name,
            lastName,
            address,
            phone_number,
            email,
            inscription_date,
            date_birthday
        });

    }catch(error){
        throw error;
    }
}

export const findClientByIdentification = async(identification) => {

    // eslint-disable-next-line no-useless-catch
    try{
        console.log("cedula:"+identification);
        return await generalApi.get(`${BASE_URL}/${identification}`);
    } catch(error){
        throw error;
    }


}

export const findClientByNameAndLastname = async(namefield) => {
 
    // eslint-disable-next-line no-useless-catch
    try{
        return await generalApi.get(`${BASE_URL}/find/${namefield}`);
    } catch(error){
        Swal.fire({
            title: "Usuarios Inexistentes",
            text:  "No se encontro el usuario buscado",
            icon:  "warning"
         });
         throw error;
    }
}

export const updateClientServ = async({identification, name, lastName, address, phone_number, email, date_birthday, inscription_date}) =>{
 // eslint-disable-next-line no-useless-catch
    try{
        return await generalApi.put(`${BASE_URL}/${identification}`,{
            identification,
            name,
            lastName,
            address,
            phone_number,
            email,
            inscription_date,
            date_birthday
            });
        } catch ( error ) {
            throw error;
        }
    
}

export const removeClientServ = async(identification) => {
    // eslint-disable-next-line no-useless-catch
    try{
        await generalApi.delete(`${BASE_URL}/${identification}`);
    } catch (error){
        throw error;
    }
}