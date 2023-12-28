import { useState } from "react"

const initialUserForm = {
    username:'',
    password:'',
    email:'',
}
export const UserForm = () => {

    const [userForm, setUserForm ] = useState(initialUserForm);

    const {username, password, email} = userForm;
    const oninputChange = ( {target }) =>{
        console.log(target.value)
    }

    return (
       <form>
            <input 
                className="form-control my-3 w-75"
                placeholder="Username"
                name="username"
                onChange={oninputChange}/>

            <input 
                className="form-control my-3 w-75"
                placeholder="Password"
                name="password"
                type="password"
                onChange={oninputChange}/>

            <input 
                className="form-control my-3 w-75"
                placeholder="Email"
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