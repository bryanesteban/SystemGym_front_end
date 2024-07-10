import { findAllClient } from '../services/clientService'
import { useDispatch, useSelector } from 'react-redux'
import { loadingClient } from '../store/slices/clients/clienstSlice';
import Swal from 'sweetalert2';

export const useClients = () => {
    
    const dispatch = useDispatch();
    const {clients} = useSelector(state => state.clients);

    const getClients = async() => {

        try {
            console.log("llega hasta aqui!");
            const result = await findAllClient();
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
  
  
    return {
        clients,
        getClients,
    }
}
