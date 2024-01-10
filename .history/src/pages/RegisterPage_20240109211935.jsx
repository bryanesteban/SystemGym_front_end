import { useContext, useEffect, useState } from "react"
import { UserForm } from "../components/UserForm"
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const RegisterPage = () =>{

    const {users=[],  initialUserForm} = useContext(UserContext);
    const [userSelected, setUserSelected] = useState(initialUserForm);

    const { id } =useParams();

    useEffect(() => {
        if(id){
            console.log(id);
            const user = users.find(u => u.id == id ) || initialUserForm;
            setUserSelected(user);
        }
        }, [id])

    return (
        <div className="container my-4" >
            <h4>{userSelected.id > 0 ? 'Editar':'Registro de usuarios'}</h4>
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