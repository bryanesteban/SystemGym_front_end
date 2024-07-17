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
    
    console.log(identification);
    console.log(name);
    console.log(lastName);
    console.log(address);
    console.log(phone_number);
    console.log(email);
    console.log(date_birthday);

    if(inscription_date === '')
        {
            const DateNow = new Date(); 
            inscription_date = DateNow.toLocaleDateString('en-CA');  
            // DateNow.getFullYear()+"-"+(DateNow.getMonth()+1)+"-"+DateNow.getDate();
        }

        

    console.log(inscription_date);
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