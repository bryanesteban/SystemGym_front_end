import { useEffect, useState } from 'react';
import { useClients } from '../hooks/useClients';
import { ClientList } from '../clients/components/ClientList';
import { ClientModalForm } from '../clients/components/ClientModalForm';

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

    const [findID, setfindID] = useState({"":""});
    const onInputChange = ( {target }) =>{
        //console.log(target.value)
        const{name,value} = target;
        setfindID({
            [name]:value,
        })
    }

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
                    <span className="mx-4">
                    <span className="mx-2">Buscar: </span>
                    <input
                        name="find"
                        value={find}
                        onChange={onInputChange}
                        >
                        
                        </input>
                    </span>

                    { clients.length === 0
                        ?   <div className="alert alert-warning"> No existen clientes registrado</div>
                        : <ClientList/>}
                </div>
            </div>
        </div>
    </>

    );
}
