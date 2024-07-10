

import { ClientRow } from '../clients/components/clientRow';
import { useClients } from '../hooks/useClients';

export const ClientPage = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {clients,getClients} = useClients();

    return (
        <table className="table table-hover table-striped mt-2">
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
