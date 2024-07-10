
export const ClientRow = ( client ) => {
  
    console.log(client);

    return(
        <>
            <tr>
                    <td>{ client.identificartion }</td>
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
