import { useAuth } from "../hooks/useAuth";
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({ children }) => {

    const {login, handlerLogin, handleLogout} = useAuth();

    return(
        <AuthContext.Provider value ={
            {
                login,
                handlerLogin,
                handleLogout
            }
        }>

        </AuthContext.Provider>
    )

}