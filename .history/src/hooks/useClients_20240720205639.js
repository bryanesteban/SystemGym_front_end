import { findAllClient, findClientByIdentification, removeClientServ, save, updateClientServ, findClientByNameAndLastname } from '../services/clientService'
import { useDispatch, useSelector } from 'react-redux'
import { loadingClient, onOpenClientForm, onCloseClientForm, loadingClientError, initialClientForm, onClientSelectedForm, updateClient, removeClient } from '../store/slices/clients/clienstSlice';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/hooks/useAuth';

export const useClients = () => {
    
    const dispatch = useDispatch();
    const {clients, visibleClientForm, clientSelected, addClient, errors} = useSelector(state => state.clients);

    const navigate = useNavigate();
    const { login, handleLogout } = useAuth();
    const getClients = async(nameField) => {

        try {
            const result = initialClientForm ;
            if(nameField == "")
                {

                    const result = await findAllClient();
                }else
                {
                    const result = await findClientByNameAndLastname();
                }
            // console.log(result);
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

    const handlerAddClient = async( client ) => {
        let clientExist = false;
        try{
            const respCompare = await findClientByIdentification(client.identification); 
            console.log("consulta: "+ respCompare);
            if(!Object.keys(respCompare.data).length)
                {
                    const response = await save( client );
                    dispatch(addClient(response.data));
        
                }
                else
                {
                    const response = await updateClientServ( client );
                    dispatch(updateClient(response.data));
                    clientExist = true;
                }
        Swal.fire(
            (!clientExist) ?
            'Cliente Creado!':
            'Cliente Actualizado',
            (!clientExist) ?
            'El cliente ha sido creado con exito!':
            'El usuario ha sido modificado con exito!',
            'success'
        )    
        handlerCloseForm();
        navigate('/clients');

        }catch (error) {
            if(error.response && error.response.status == 400){
                dispatch(loadingClientError(error.response.data));
            }else{
                throw error;
            }
        }


    }

    const handlerRemoveClient = (identification) => {

        Swal.fire({
            title: "Estas seguro que desea eliminar?",
            text: "Cuidado, el cliente sera eliminado!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar!"
        }).then( async (result) => {
            if(result.isConfirmed){

                try{

                    await removeClientServ(identification);
                    dispatch(removeClient(identification));

                }catch(error){

                    if(error.response?.status == 401)
                        {
                            handleLogout();
                        }
                }
            }
        })
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

    const handlerClientSelectedForm = (client) => {

        dispatch(onClientSelectedForm({...client}));
    }

  
    return {
        clients,
        errors,
        visibleClientForm,
        clientSelected,
        initialClientForm,
        getClients,
        handlerOpenClientForm,
        handlerClientSelectedForm,
        handlerCloseForm,
        handlerAddClient,
        handlerRemoveClient
    }
}
