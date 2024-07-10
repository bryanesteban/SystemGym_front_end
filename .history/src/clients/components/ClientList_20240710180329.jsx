

import { useClients } from '../../hooks/useClients';
import { ClientRow } from './clientRow';





export const ClientList = () => {

    const {clients} = useClients();
    return (
        <table className="table table-hover table-striped">
            <thead>
                <th>Cedula</th>
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
                        key={client.identification}
                        client ={ client }
                        />
                    ))
                }
            </tbody>
        </table>
  )
}
