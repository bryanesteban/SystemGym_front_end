

import { useEffect } from 'react';

import { useClients } from '../hooks/useClients';
import { ClientList } from '../clients/components/ClientList';

export const ClientPage = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    
    
    
    const {clients, getClients} = useClients();

    useEffect(() => {
        getClients();
    },[])

    return (
    <div className="container my-4">
        <h2>Clientes</h2>
        <div className="row">

            <div className="col">

            { clients.length === 0
                    ?   <div className="alert alert-warning"> No existen clientes registrado</div>
                    : <ClientList/>}
            </div>
        </div>
    </div>

    )
}
