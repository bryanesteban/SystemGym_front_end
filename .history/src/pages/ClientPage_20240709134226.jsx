


import React, { useEffect } from 'react'
import { ClientRow } from '../clients/components/clientRow';

export const clientPage = () => {
  
    // const {
    //     clients,
    //     getUsers,
    // } = useClients();
  
  

    const { clients } = useClients();
  
    return (
        <table className="table table-hover table-striped">
            <thead>
                <tr>Cedula</tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Direccion</th>
                <th>Telefono</th>
                <th>correo electronico</th>
                <th>fecha de inscripcion</th>
                <th>fecha de cumpleaños</th>
            </thead>
            <tbody>
                {
                    clients.map( ( client ) => (
                        <ClientRow
                        key={client.identificartion}
                        client ={ client }
                        />
                    ))
                }
            </tbody>
        </table>
  )
}
