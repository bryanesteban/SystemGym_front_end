import axios from "axios";

const BASE_URL = 'http://localhost:8080/users';


const config = {
    Headers:{
        "Authorization": sessionStorage.getItem{'token'},
        "Content-Type" : "application/json"
    }

}
export const findAll = async() =>{

    try{
        const response = await axios.get(BASE_URL);
        return response;

    } catch(error){
        console.error(error);
    }

    return undefined;
}

export const save = async ({username, email, password}) => {

    // eslint-disable-next-line no-useless-catch
    try{
        return await axios.post(BASE_URL, {
            username,
            email,
            password,
        });
    }catch(error){
        throw error;
    }
}

export const update = async({id, username, email}) => {
    // eslint-disable-next-line no-useless-catch
    try {
        return  await axios.put(`${BASE_URL}/${id}`,{
            username,
            email,
           // password: 'nothing',
        });
    } catch (error) {
        throw error;
    }
}

export const remove = async(id) =>{
    try {
        await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        console.error(error);
    }
}