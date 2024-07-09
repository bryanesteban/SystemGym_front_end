import { LoginPage } from "./auth/pages/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserRoutes } from "./routes/userRoutes";
import { useSelector } from "react-redux";

export const AppRoutes = () => {
    const {isAuth, isLoginLoading} = useSelector(state => state.auth);

    //aqui puede ir un useffect para validar sesion cada hora
    if(isLoginLoading){
        return (
            <div className="text-center ">
                <div className="spinner-border text-warning-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }
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