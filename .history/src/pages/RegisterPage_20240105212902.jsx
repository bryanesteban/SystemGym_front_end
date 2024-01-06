import { useState } from "react"
import { UserForm } from "../components/UserForm"

export const RegisterPage = ({handlerAddUser, initialUserForm}) =>{

    const [userSelected, setUserSelected] = useState();
    return (
        <div className="container my-4" >
            <h4>Registro de usuarios</h4>
            <div className="row">
                <div className="col">
                    <UserForm />
                </div>
            </div>
        
        </div>
    )

}