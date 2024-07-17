import { NavLink } from "react-router-dom";

export const ClientRow = ( {identification, name, lastName, address, phone_number, email,  inscription_date, date_birthday} ) => {

    const dateInscription = new Date(inscription_date);
    const dateBirthday = new Date(date_birthday);
    return(
        <>
            <tr>
                    <td>{ identification }</td>
                    <td>{ name }</td>
                    <td>{ lastName }</td>
                    <td>{ address}</td>
                    <td>{ phone_number }</td>
                    <td>{ email }</td>
                    <td>{ dateInscription.getDay()+"/"+dateInscription.getMonth()+"/"+dateInscription.getFullYear() }</td>
                    <td>{ dateBirthday.getDay()+"/"+dateBirthday.getMonth()+"/"+dateBirthday.getFullYear() }</td>
                    <td>
                        <NavLink className={"btn btn-secondary btn-sm"}
                        to={'client/edit'+identification}>
                            Editar
                        </NavLink>
                    </td>
            </tr>
        </>
    )
}
