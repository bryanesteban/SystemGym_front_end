
import { UsersPage } from "./pages/UsersPage";
import { Navbar } from "./components/layout/Navbar";
import { useAuth } from "./auth/hooks/useAuth";
import { LoginPage } from "./auth/pages/LoginPage";



export const UsersApp = () =>{
   
    const {login, handlerLogin, handleLogout} = useAuth();

    return (
        <>
            {
            login.isAuth
            ? (
               <>
                <Navbar  login ={login} handleLogout={handleLogout} />
                <UsersPage/>
               </>
            )
            : <LoginPage handlerLogin={handlerLogin}/>
            }
        </>
    );
}