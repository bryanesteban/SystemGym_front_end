import { useEffect, useState } from 'react'
import { useClients } from '../../hooks/useClients';


export const ClientAdd = ({clientSelected, handlerCloseForm}) => {


    const {initialClientForm, errors, handlerAddClient} = useClients();

    const [clientForm, setClientForm] = useState(initialClientForm);
    const {identification, name, lastName, address, phone_number, email, date_birthday } = clientForm;

    useEffect(() => {
        setClientForm({
            ...clientSelected,
            //password:'',
        });
    }, [clientSelected]);

    const onInputChange = ( { target }) => {

        const{name,value} = target;
        setClientForm({
            ...clientForm,
            [name]:value,
        })
        
    }

    const onSubmit = (event) =>{
        event.preventDefault();
     
        //guardar el user form en el listado de usuarios
        handlerAddClient(clientForm);
        
    }

    const onClientCloseForm = () => {
        setClientForm(initialClientForm);
        handlerCloseForm();
    }

    

  return (
    <form onSubmit={onSubmit}>
        <input
            className="form-control my-3 w-75"
            placeholder="Cedula"
            name="identification"
            value={identification}
            onChange={onInputChange}
            required/>
        <p className="text-danger">{ errors?.identification}</p>

        <input
            className="form-control my-3 w-75"
            placeholder="Nombre"
            name="name"
            value={name}
            onChange={onInputChange}
            required/>
        <p className="text-danger">{ errors?.name}</p>

        <input
            className="form-control my-3 w-75"
            placeholder="Apellido"
            name="lastName"
            value={lastName}
            onChange={onInputChange}
            required/>
        <p className="text-danger">{ errors?.lastName}</p>

        <input
            className="form-control my-3 w-75"
            placeholder="direccion"
            name="address"
            value={address}
            onChange={onInputChange}
            required/>
        <p className="text-danger">{ errors?.address}</p>

        <input
            className="form-control my-3 w-75"
            placeholder="Telefono"
            name="phone_number"
            value={phone_number}
            onChange={onInputChange}
            required/>
        <p className="text-danger">{ errors?.phone_number}</p>

        <input
            className="form-control my-3 w-75"
            placeholder="Email"
            name="email"
            type="email"
            value={email}
            onChange={onInputChange}
            required/>
        <p className="text-danger">{ errors?.email}</p>

        <input
            className="form-control my-3 w-75"
            type="date"
            name="date_birthday"
            value={date_birthday}
            onChange={onInputChange}
            required/>
        <p className="text-danger">{ errors?.date_birthday}</p>
        <button
                className="btn btn-primary"
                type="submit">
                {identification > 0 ? 'Editar':'Crear'}
            </button>
        { !handlerCloseForm ||
        <button
        className="btn btn-primary mx-2"
        type="button"
        onClick={() =>onClientCloseForm()}>
            Cerrar
        </button>
        }
    </form>
  )
}
