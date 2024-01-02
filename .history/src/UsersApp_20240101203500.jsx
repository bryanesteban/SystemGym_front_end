import { LoginPage } from "./auth/pages/LoginPage";
import { loginReducers } from "./auth/pages/reducers/loginReducers";
import { UsersPage } from "./pages/UsersPage";
import { usersReducer } from "./reducers/usersReducer";

const initialLogin = {
    isAuth:false,
    user: undefined,
}
export const UsersApp = () =>{
   
    const [login, dispach] = usersReducer(loginReducers,)
    return (
        <>
            <LoginPage/>
            {  }
        </>
    );
}