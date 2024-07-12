import React, { useState } from 'react'
import { useClients } from '../../hooks/useClients';


export const ClientAdd = () => {


    const {initialClientForm, handlerAddClient, error} = useClients();

    const [clientForm, setClientForm] = useState(initialClientForm);
    const {identification, name, lastName, address, phone_number, email } = clientForm;
    const onSubmit = (event) =>{
        event.preventDefault();
     
        //guardar el user form en el listado de usuarios
        handlerAddClient(clientForm);
        
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

        <input
            className="form-control my-3 w-75"
            placeholder="direccion"
            name="address"
            value={address}
            onChange={onInputChange}/>
        <p className="text-danger">{ error?.address}</p>

        <input
            className="form-control my-3 w-75"
            placeholder="Telefono"
            name="phone_number"
            value={phone_number}
            onChange={onInputChange}/>
        <p className="text-danger">{ error?.phone_number}</p>

        <input
            className="form-control my-3 w-75"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onInputChange}/>
        <p className="text-danger">{ error?.email}</p>

        <input
            className="form-control my-3 w-75"
            placeholder=""
            name="identification"
            value={identification}
            onChange={onInputChange}/>
        <p className="text-danger">{ error?.identification}</p>

    </form>
  )
}
