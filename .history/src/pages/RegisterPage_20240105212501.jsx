import { UserForm } from "../components/UserForm"

export const RegisterPage = () =>{

    return (
        <div className="container my-4" >
            <h4>Registro de usuarios</h4>
            <div className="row">
                <div className="col">
                    <UserForm/>
                </div>
            </div>
        
        </div>
    )

}