import { findAllClient } from '../services/clientService'
import { useDispatch, useSelector } from 'react-redux'
import { loadingClient, onOpenClientForm, onCloseClientForm, loadingClientError } from '../store/slices/clients/clienstSlice';
import Swal from 'sweetalert2';

export const useClients = () => {
    
    const dispatch = useDispatch();
    const {clients, visibleClientForm, errors} = useSelector(state => state.clients);

    const getClients = async() => {

        try {

            const result = await findAllClient();
            console.log(result);
            dispatch(loadingClient(result.data));
        } catch (error) {
            console.log(error);
            if(error.response?.status == 401){
                Swal.fire({
                   title: "Usuarios Inexistentes",
                   text:  "No se encontro ningun usuario",
                   icon:  "warning"
                }
                    
                );
            }
        }
    }
  
    const handlerOpenClientForm = () => {
        //setVisibleForm(true);
        dispatch(onOpenClientForm());
    }

    const handlerCloseForm = () => {
        //setVisibleForm(false);
        //setUserSelected(initialUserForm);
        dispatch(onCloseClientForm());
        dispatch(loadingClientError({}));
    }
  
    return {
        clients,
        errors,
        getClients,
        handlerOpenClientForm,
        handlerCloseForm,

    }
}
