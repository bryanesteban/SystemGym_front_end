import Swal from "sweetalert2";
import { LoginPage } from "./auth/pages/LoginPage";
import { loginReducers } from "./auth/pages/reducers/loginReducers";
import { UsersPage } from "./pages/UsersPage";
import { useReducer } from "react";


const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {

    isAuth:false,
    user: undefined,
}
export const UsersApp = () =>{
   
    const [login, dispach] = useReducer(loginReducers, initialLogin);

    const handlerLogin = ({username, password}) =>{
       
        if(username === 'admin' && password=== '12345'){
            const user = {username:'admin'}
            dispach({
                type:'login',
                payload:user,
            });
          sessionStorage.setItem('login', JSON.stringify({
            isAuth: true,
            user: user,
          }));
        }else{
            Swal.fire('Error Login',
                       'Usuario o password invalidos',
                        'error');
        }
    }

    const handleLogout = () => {
        dispach({
            type:'logout',

        })

        sessionStorage.removeItem('login');

    }
    return (
        <>
            {
            login.isAuth
            ? (
               <>
                <Navbar/>
                <UsersPage/>
               </>
            )
            : <LoginPage handlerLogin={handlerLogin}/>
            }
        </>
    );
}