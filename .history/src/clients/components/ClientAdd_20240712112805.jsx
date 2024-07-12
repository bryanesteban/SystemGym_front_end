import { useEffect, useState } from 'react'
import { useClients } from '../../hooks/useClients';


export const ClientAdd = ({clientSelected, handlerCloseForm}) => {


    const {initialClientForm, error, handlerAddClient} = useClients();

    const [clientForm, setClientForm] = useState(initialClientForm);
    const {identification, name, lastName, address, phone_number, email, date_birthday } = clientForm;
    


    useEffect(() => {
        setClientForm({
            ...clientSelected,
            //password:'',
        });
    }, [clientSelected]);

    const onSubmit = (event) =>{
        event.preventDefault();
     
        //guardar el user form en el listado de usuarios
        handlerAddClient(clientForm);
        
    }

    const onCloseForm = () => {
        setClientForm(initialClientForm);
        handlerCloseForm();
    }

    const onInputChange = ( { target }) => {

        const{name,value} = target;
        setClientForm({
            ...clientForm,
            [name]:value,
        })
        
    }

  return (
    <form onSubmit={onSubmit}>
        <input
            className="form-control my-3 w-75"
            placeholder="cedula"
            name="identification"
            value={identification}
            onChange={onInputChange}/>
        <p className="text-danger">{ error?.identification}</p>

        <input
            className="form-control my-3 w-75"
            placeholder="Nombre"
            name="name"
            value={name}
            onChange={onInputChange}/>
        <p className="text-danger">{ error?.name}</p>

        <input
            className="form-control my-3 w-75"
            placeholder="Apellido"
            name="lastName"
            value={lastName}
            onChange={onInputChange}/>
        <p className="text-danger">{ error?.lastName}</p>

        
        <button
                className="btn btn-primary"
                type="submit">
                {identification > 0 ? 'Editar':'Crear'}
            </button>
        { !handlerCloseForm ||
        <button
        className="btn btn-primary mx-2"
        type="button"
        onClick={() =>onCloseForm()}>
            Cerrar
        </button>
        }
    </form>
  )
}
