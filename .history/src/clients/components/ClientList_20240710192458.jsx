

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
                <th>Fecha de Inscripcion</th>
                <th>Fecha de Cumpleaños</th>
            </thead>
            <tbody>
                {  
                    clients.map( ( client ) => (
                        <ClientRow
                       client
                        />
                    ))
                }
            </tbody>
        </table>
  )
}
