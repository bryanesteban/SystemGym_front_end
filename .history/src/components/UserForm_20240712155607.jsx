import { useEffect, useState } from "react"
import { useUsers } from "../hooks/useUsers";



export const UserForm = ({userSelected,  handlerCloseForm }) => {

    const {handlerAddUser, initialUserForm, errors} = useUsers();

    const [userForm, setUserForm ] = useState(initialUserForm);
    const [checked, setChecked] = useState(userForm.admin);
    const {id, username, password, email, admin} = userForm;

    useEffect(() => {
        setUserForm({
            ...userSelected,
            //password:'',
        });
    }, [userSelected]);


    const onInputChange = ( {target }) =>{
        //console.log(target.value)
        const{name,value} = target;
        setUserForm({
            ...userForm,
            [name]:value,
        })
    }

    const onCheckboxChange = () => {
        setChecked(!checked);
        setUserForm({
            ...userForm,
            admin:checked,
        })
    }

    const onSubmit = (event) =>{
        event.preventDefault();
     
        //guardar el user form en el listado de usuarios
        handlerAddUser(userForm);
        
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
                onChange={onInputChange}/>
                <p className="text-danger">{ errors?.username}</p>

                {id > 0  || <input 
                    className="form-control my-3 w-75"
                    placeholder="Password"
                    name="password"
                    value={password}
                    type="password"
                    onChange={onInputChange}/>}
                    <p className="text-danger">{ errors?.password}</p>

            <input 
                className="form-control my-3 w-75"
                placeholder="Email"
                value={email}
                name="email"
                onChange={onInputChange}/>
                <p className="text-danger">{ errors?.email}</p>
            
            <div className="my-3 form-check">
                    <input type="checkbox"
                        name="admin"
                        checked={admin}
                        className="form-check-input"
                        onChange={onCheckboxChange}
                    />
                    <label className="form-check-label">Admin</label>
            </div>

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