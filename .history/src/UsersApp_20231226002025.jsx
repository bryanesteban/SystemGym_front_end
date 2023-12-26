import { UserForm } from "./components/UserForm";

export const UsersApp = () =>{
    
    const initiallUsers = [
        {

            id: 1,
            username: 'pepe',
            password: '12345',
            email: 'pepe@correo.com'
        }    

    ] 
    return (
        <div className="container my-4">
            <h2>Users App</h2>
            <div className="row">   
                <div className="col">
                    <UserForm />
                </div>
                <div className="col">
                    <UserForm />
                </div>
            </div>
        </div>
    );
}