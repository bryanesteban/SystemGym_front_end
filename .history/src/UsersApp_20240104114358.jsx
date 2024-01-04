import { useAuth } from "./auth/hooks/useAuth";
import { LoginPage } from "./auth/pages/LoginPage";
import { Routes } from "react-router-dom";



export const UsersApp = () =>{
   
    const {login, handlerLogin, handleLogout} = useAuth();

    return (
        <Routes>
            {
                login.isAuth
                ? (
                    <Route path='/*' element={<UserRoutes 
                        login={login} 
                        handleLogout={handleLogout} 
                    />}/>
                )
                : <>
                    <Route path='/login'
                           element={<LoginPage handlerLogin={handlerLogin}/>} />
                    <Routes path='/*' element={<Navigate to="/login"} />}/>
                  </>
                        

            }
        </Routes>
    );
}