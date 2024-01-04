import { LoginPage } from "./auth/pages/LoginPage";
import { UsersPage } from "./pages/UsersPage";
import { Navbar } from "./components/layout/Navbar";



export const UsersApp = () =>{
   
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