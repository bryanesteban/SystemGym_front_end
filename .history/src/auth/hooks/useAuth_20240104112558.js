import { useReducer } from "react";
import { loginReducers } from "../reducers/loginReducers";
import Swal from "sweetalert2";
import { loginUser } from "../services/AuthService";

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {

    isAuth:false,
    user: undefined,
}

export const useAuth = () =>{
    const [login, dispatch] = useReducer(loginReducers, initialLogin);

    const handlerLogin = ({username, password}) =>{
       const isLogin = loginUser({username, password});
        if(isLogin){
            const user = {username:'admin'}
            dispatch({
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
        dispatch({
            type:'logout',

        })

        sessionStorage.removeItem('login');

    }
    
    return {
        login,
        handlerLogin,
        handleLogout,
    };
}