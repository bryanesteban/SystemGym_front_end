import Swal from "sweetalert2";
import { LoginPage } from "./auth/pages/LoginPage";
import { loginReducers } from "./auth/pages/reducers/loginReducers";
import { usersReducer } from "./reducers/usersReducer";

const initialLogin = {
    isAuth:false,
    user: undefined,
}
export const UsersApp = () =>{
   
    const [login, dispach] = usersReducer(loginReducers, initialLogin);

    const handlerLogin = ({username, password}) =>{
        if(username === 'admin' && password=== '12345'){
            //
        }else{
            Swal.fire('Error Login',
                       'Usuario y password invalidos',
                        'error');
        }
    }

    return (
        <>
            <LoginPage/>
            { /* <UserPage/> */ }
        </>
    );
}