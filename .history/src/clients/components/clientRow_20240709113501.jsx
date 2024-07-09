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
                <th>fecha de inscripcion</th>
                <th>fecha de cumpleaños</th>
        </tr>
    )
}
