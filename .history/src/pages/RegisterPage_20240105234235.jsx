import { useEffect, useState } from "react"
import { UserForm } from "../components/UserForm"
import { useParams } from "react-router-dom";

export const RegisterPage = ({users, handlerAddUser, initialUserForm}) =>{

    const [userSelected, setUserSelected] = useState(initialUserForm);

    const { id } =useParams();

    useEffect(() => {
        const user = users

    }, [id])
    return (
        <div className="container my-4" >
            <h4>Registro de usuarios</h4>
            <div className="row">
                <div className="col">
                    <UserForm 
                        userSelected={userSelected}
                        handlerAddUser={handlerAddUser}
                        initialUserForm={initialUserForm}
                        />
                </div>
            </div>
        
        </div>
    )

}