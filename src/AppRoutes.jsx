import { LoginPage } from "./auth/pages/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserRoutes } from "./routes/userRoutes";
import { useContext } from "react";
import { AuthContext } from "./auth/context/AuthContext";

export const AppRoutes = () => {
    const {login} = useContext(AuthContext);

    //aqui puede ir un useffect para validar sesion cada hora
    return (
        <Routes>
            {
                login.isAuth
                ? (
                    <Route path='/*' element={<UserRoutes />} /> 

                )
                : <>
                    <Route path='/login'
                           element={<LoginPage/>} />
                    <Route path='/*' element={<Navigate to="/login"/> } />
                  </>
                        

            }
        </Routes>
    );
}