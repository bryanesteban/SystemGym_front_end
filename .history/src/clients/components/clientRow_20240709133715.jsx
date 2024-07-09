import React from 'react'

export const clientRow = ( client ) => {
  

    return(
        <tr>
             <tr>#</tr>
                <th>{ client.identificartion }</th>
                <th>{ client.name }</th>
                <th>{ client.lastName }</th>
                <th>{ client.address}</th>
                <th>{ client.email }</th>
                <th>{ client.inscription_date }</th>
                <th>{ client.date_birthday }</th>
        </tr>
    )
}
