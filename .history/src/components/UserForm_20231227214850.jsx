import { useState } from "react"

const initialUserForm = {
    username:'',
    password:'',
    email:'',
}
export const UserForm = ({ handlerAddUser }) => {

    const [userForm, setUserForm ] = useState(initialUserForm);

    const {username, password, email} = userForm;
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
        console.log(userForm);
     
        //guardar el user form en el listado de usuarios

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

            <button
                className="btn btn-primary"
                type="submit">
                Crear
            </button>
        </form>
    )

}