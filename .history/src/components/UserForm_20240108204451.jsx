import { useEffect, useState } from "react"
import Swal from "sweetalert2";


export const UserForm = ({userSelected, handlerAddUser, initialUserForm, handlerCloseForm }) => {

    const [userForm, setUserForm ] = useState(initialUserForm);

    const {id, username, password, email} = userForm;

    useEffect(() => {
        setUserForm({
            ...userSelected,
            //password:'',
        });
    }, [userSelected]);


    const oninputChange = ( {target }) =>{
        //console.log(target.value)
        const{name,value} = target;
        setUserForm({
            ...userForm,
            [name]:value,
        })
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        if(!username || (!password && id === 0) || !email){
            
            Swal.fire(
                "Error de validacion",
                "Debe completar los campos del formulario!",
                "error"
              );
            return;
        }

        if(!email.includes('@')){
            return ;
        }
        //console.log(userForm);
     
        //guardar el user form en el listado de usuarios
        handlerAddUser(userForm);
        setUserForm(initialUserForm);
        
    }
    const onCloseForm = () => {
        setUserForm(initialUserForm);
        handlerCloseForm();
    }

    return (
       <form onSubmit={onSubmit}>
            <input 
                className="form-control my-3 w-75"
                placeholder="Username"
                name="username"
                value={username}
                onChange={oninputChange}/>

                {id > 0  || <input 
                    className="form-control my-3 w-75"
                    placeholder="Password"
                    name="password"
                    value={password}
                    type="password"
                    onChange={oninputChange}/>}
                

            <input 
                className="form-control my-3 w-75"
                placeholder="Email"
                value={email}
                name="email"
                onChange={oninputChange}/>
            <input type="hidden"
                   name="id"
                   value={id}/>

            <button
                className="btn btn-primary"
                type="submit">
                {id > 0 ? 'Editar':'Crear'}
            </button>
            {!handlerCloseForm ||
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