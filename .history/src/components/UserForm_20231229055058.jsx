import { useEffect, useState } from "react"


export const UserForm = ({userSelected, handlerAddUser, initialUserForm }) => {

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
        if(!username || !password || !email){
            alert('Debe completar los campos del formulario!')
            return;
        }
        //console.log(userForm);
     
        //guardar el user form en el listado de usuarios
        handlerAddUser(userForm);
        setUserForm(initialUserForm);
        
    }

    return (
       <form onSubmit={onSubmit}>
            <input 
                className="form-control my-3 w-75"
                placeholder="Username"
                name="username"
                value={username}
                onChange={oninputChange}/>

            <input 
                className="form-control my-3 w-75"
                placeholder="Password"
                name="password"
                value={password}
                type="password"
                onChange={oninputChange}/>

            <input 
                className="form-control my-3 w-75"
                placeholder="Email"
                value={email}
                name="email"
                onChange={oninputChange}/>
            <input type="hidden"
                   name="id"
                   value='id'

            <button
                className="btn btn-primary"
                type="submit">
                Crear
            </button>
        </form>
    )

}