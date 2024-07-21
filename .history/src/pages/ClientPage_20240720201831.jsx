import { useEffect, useState } from 'react';
import { useClients } from '../hooks/useClients';
import { ClientList } from '../clients/components/ClientList';
import { ClientModalForm } from '../clients/components/ClientModalForm';
import { FindClient } from '../clients/components/findClient';

export const ClientPage = () => {

    const {
           clients,
           visibleClientForm,
           getClients,
           handlerOpenClientForm 
        } = useClients();

    useEffect(() => {
        getClients();
    },[])

    

    return (
    <>
       {!visibleClientForm || <ClientModalForm/>} 
        <div className="container my-4">
            <h2>Clientes</h2>
            <div className="row">

                <div className="col">
                   {visibleClientForm || <button 
                        className="btn btn-primary my-2"
                        onClick={handlerOpenClientForm}>
                        Nuevo Cliente
                    </button>}
                    <div className="col-8">
                    <FindClient/>
                    </div>

                    { clients.length === 0
                        ?   <div className="alert alert-warning"> No existen clientes registrado</div>
                        : <ClientList/>}
                </div>
            </div>
        </div>
    </>

    );
}
