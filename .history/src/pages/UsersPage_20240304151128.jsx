import { useEffect } from "react";
import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList";
import { useUsers } from "../hooks/useUsers";
import { useAuth } from "../auth/hooks/useAuth";
import { useParams } from "react-router-dom";

export const UsersPage = () =>{
    
    const { page } = useParams();
    const {
        users,
        visibleForm,
        isLoading,
        handlerOpenForm,
        getUsers,
    } = useUsers();

    const { login } = useAuth();

    useEffect(() => {
        getUsers(page);
    },[])

    if(isLoading){
        return (
            <div className="text-center ">
                <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }
    return (
        <>

        {!visibleForm || <UserModalForm/>}
        <div className="container my-4">
            <h2>Users App</h2>
            <div className="row">   
                    
                    
                <div className="col">
                    {(visibleForm || !login.isAdmin)  || <button
                    className="btn btn-primary my-2"
                    onClick={handlerOpenForm}>
                        Nuevo Usuario
                    </button>}
                    {
                        users.length === 0 
                            ? <div className="alert alert-warning"> No hay usuarios en le sistema!</div>
                            :<UsersList/>}
                    
                </div>
            </div>
        </div>
        </>
    );
}