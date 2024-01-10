import { useAuth } from "./auth/hooks/useAuth";
import { LoginPage } from "./auth/pages/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserRoutes } from "./routes/userRoutes";



export const UsersApp = () =>{
   
    

    return (
        <Routes>
            {
                login.isAuth
                ? (
                    <Route path='/*' element={<UserRoutes
                        login={login} 
                        handleLogout={handleLogout} />} /> 

                )
                : <>
                    <Route path='/login'
                           element={<LoginPage handlerLogin={handlerLogin}/>} />
                    <Route path='/*' element={<Navigate to="/login"/> } />
                  </>
                        

            }
        </Routes>
    );
}