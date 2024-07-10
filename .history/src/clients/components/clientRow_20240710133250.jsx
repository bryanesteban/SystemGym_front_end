
export const ClientRow = ( client ) => {
  
    console.log(client);

    return(
        <tr>
             <tr>#</tr>
                <tr>{ client.identificartion }</tr>
                <tr>{ client.name }</tr>
                <tr>{ client.lastName }</tr>
                <tr>{ client.address}</tr>
                <tr>{ client.email }</tr>
                <tr>{ client.inscription_date }</tr>
                <tr>{ client.date_birthday }</tr>
        </tr>
    )
}
