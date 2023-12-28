import { useState } from "react"

export const UserForm = () => {

    const [userForm, setUserForm ] = useState();
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