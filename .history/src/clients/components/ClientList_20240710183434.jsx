

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
                <th>fecha de Cumpleaños</th>
            </thead>
            <tbody>
                {  
                    clients.map( ( {identification, name, lastName, address, phone_number, email, inscription_date, date_birthday  } ) => (
                        <ClientRow
                        key={identification}
                        identification ={ identification }
                        name = { name }
                        lastName = { lastName }
                        address = { address }
                        phone_number = { phone_number }
                        email = { email }
                        inscription_date = { inscription_date }
                        date_birthday = { date_birthday }
                        />
                    ))
                }
            </tbody>
        </table>
  )
}
