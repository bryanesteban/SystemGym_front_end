import generalApi from "../apis/generalApi";

const BASE_URL = '/users';


export const findAll = async() =>{

    try{
        const response = await generalApi.get(BASE_URL);
        return response;

    } catch(error){
        console.error(error);
        throw error;
    }

}

export const save = async ({username, email, password, admin}) => {

    // eslint-disable-next-line no-useless-catch
    try{
        return await generalApi.post(BASE_URL, {
            username,
            email,
            password,
            admin,
        });
    }catch(error){
        throw error;
    }
}

export const update = async({id, username, email, admin}) => {
    // eslint-disable-next-line no-useless-catch
    try {
        return  await generalApi.put(`${BASE_URL}/${id}`,{
            username,
            email,
            admin,
        });
    } catch (error) {
        throw error;
    }
}

export const remove = async(id) =>{
   // eslint-disable-next-line no-useless-catch
    try {
        await generalApi.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        throw error;
    }
}