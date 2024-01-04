import { useReducer } from "react";
import { loginReducers } from "../pages/reducers/loginReducers";

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {

    isAuth:false,
    user: undefined,
}

export const useAuth = () =>{
    const [login, dispatch] = useReducer(loginReducers, initialLogin);
    
    
    return (




    );
}