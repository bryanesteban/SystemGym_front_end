import { useReducer } from "react";
import { loginReducers } from "../reducers/loginReducers";
import Swal from "sweetalert2";
import { loginUser } from "../services/AuthService";
import { useNavigate } from "react-router-dom";

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {

    isAuth:false,
    user: undefined,
}

export const useAuth = () =>{
    const [login, dispatch] = useReducer(loginReducers, initialLogin);
    const navigate = useNavigate();
    
    const handlerLogin = async ({username, password}) => {

       

        try{

            const response = await loginUser({username, password});
            const token = response.data.token;
            const user = {username: response.data.username}
            dispatch({
                type:'login',
                payload:user,
            });
          sessionStorage.setItem('login', JSON.stringify({
            isAuth: true,
            user: user,
          }));
          navigate('/users');
        }catch(error){
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