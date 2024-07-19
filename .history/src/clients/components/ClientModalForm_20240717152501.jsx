import { useClients } from '../../hooks/useClients'
import { ClientAdd } from './ClientAdd';

export const ClientModalForm = () => {
  
    const {clientSelected, handlerCloseForm} = useClients();
  
  
    return (
    
        <div className="abrir-modal animacion fadeIn">
        <div className="modal" style={ {display:"block"}} tabIndex="-1">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">
                            {!clientSelected.identification ===""  ? 'Editar ': 'Crear ' }
                            Clientes
                        </h5>
                    </div>
                    <div className="modal-body">
                        <ClientAdd 
                            userSelected = {clientSelected}
                            handlerCloseForm ={handlerCloseForm}
                            />
                    </div>
                </div>
            </div>
        </div>
    </div>
    

  )
}
