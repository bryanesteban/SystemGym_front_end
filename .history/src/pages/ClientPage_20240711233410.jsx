

import { useEffect } from 'react';

import { useClients } from '../hooks/useClients';
import { ClientList } from '../clients/components/ClientList';

export const ClientPage = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    
    
    
    const {clients,
           visibleClientForm,
           getClients,
           handlerOpenClientForm } = useClients();

    useEffect(() => {
        getClients();
    },[])

    return (
    <>
       {!visibleClientForm || } 
        <div className="container my-4">
            <h2>Clientes</h2>
            <div className="row">

                <div className="col">
                {
                    <button 
                        className="btn btn-primary my-2"
                        onClick={handlerOpenClientForm}>
                        Nuevo Cliente
                    </button>
                }


                { clients.length === 0
                        ?   <div className="alert alert-warning"> No existen clientes registrado</div>
                        : <ClientList/>}
                </div>
            </div>
        </div>
    </>

    )
}
