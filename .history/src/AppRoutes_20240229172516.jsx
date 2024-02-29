import { LoginPage } from "./auth/pages/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserRoutes } from "./routes/userRoutes";
import { useAuth } from "./auth/hooks/useAuth";
import { useSelector } from "react-redux";

export const AppRoutes = () => {
    const {isAuth} = useSelector(state => state.auth);

    //aqui puede ir un useffect para validar sesion cada hora
    return (
        <Routes>
            {
                isAuth
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