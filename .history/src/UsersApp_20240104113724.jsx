import { useAuth } from "./auth/hooks/useAuth";
import { LoginPage } from "./auth/pages/LoginPage";
import { Routes } from "react-router-dom";



export const UsersApp = () =>{
   
    const {login, handlerLogin, handleLogout} = useAuth();

    return (
        <Routes>
            {
                login.isAuth
                ? (
                    <Route path='/users'/>
                )
                : <LoginPage handlerLogin={handlerLogin}/>
            }
        </Routes>
    );
}