
export const ClientRow = ( {identification, name, lastName, address, email,  inscription_date, date_birthday} ) => {

    return(
        <>
            <tr>
                    <td>{ identification }</td>
                    <td>{ name }</td>
                    <td>{ lastName }</td>
                    <td>{ address}</td>
                    <td>{ email }</td>
                    <td>{ inscription_date }</td>
                    <td>{ date_birthday }</td>
            </tr>
        </>
    )
}
