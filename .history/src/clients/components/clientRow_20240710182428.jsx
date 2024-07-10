
export const ClientRow = ( {identification, name, lastName, address, email,  inscription_date, date_birthday} ) => {

    return(
        <>
            <tr>
                    <td>{ identification }</td>
                    <td>{ client.name }</td>
                    <td>{ client.lastName }</td>
                    <td>{ client.address}</td>
                    <td>{ client.email }</td>
                    <td>{ client.inscription_date }</td>
                    <td>{ client.date_birthday }</td>
            </tr>
        </>
    )
}
