import { useReducer } from "react";
import { loginReducers } from "../pages/reducers/loginReducers";

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {

    isAuth:false,
    user: undefined,
}

export const useAuth = () =>{
    const [login, dispatch] = useReducer(loginReducers, initialLogin);
    
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




    );
}