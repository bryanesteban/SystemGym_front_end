
import { useClients } from "../../hooks/useClients";

export const ClientRow = ( {identification, name, lastName, address, phone_number, email,  inscription_date, date_birthday} ) => {

    const dateInscription = new Date(inscription_date);
    const dateBirthday = new Date(date_birthday);
 
    const dateInscriptionString = ;
    const dataBirthDayString = dateBirthday.getDay()+"/"+dateBirthday.getMonth()+"/"+dateBirthday.getFullYear();
    
    const formatBirthday = new Date(date_birthday).toISOString().slice(0,10) ;
    const formatInscription = new Date(inscription_date).toISOString().slice(0,10) ;
    const { handlerClientSelectedForm } = useClients();
    


    return(
        <>
            <tr>
                    <td>{ identification }</td>
                    <td>{ name }</td>
                    <td>{ lastName }</td>
                    <td>{ address}</td>
                    <td>{ phone_number }</td>
                    <td>{ email }</td>
                    <td>{ dateInscription.getDate()+"/"+dateInscription.getMonth()+"/"+dateInscription.getFullYear() }</td>
                    <td>{ dataBirthDayString }</td>
                    <td>
                        <button
                            type="button"
                            className="btn btn-warning btn-sm"
                            onClick={ () => handlerClientSelectedForm({
                                identification: identification,
                                name: name,
                                lastName: lastName,
                                address: address,
                                phone_number: phone_number,
                                email: email,
                                inscription_date: formatInscription,
                                date_birthday: formatBirthday
                            })}
                        >
                            Editar
                        </button>
                    </td>
            </tr>
        </>
    )
}
