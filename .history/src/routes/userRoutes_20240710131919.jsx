import { Navigate, Route, Routes } from "react-router-dom"
import { UsersPage } from "../pages/UsersPage"
import { Navbar } from "../components/layout/Navbar"
import { RegisterPage } from "../pages/RegisterPage"
import { ClientPage } from "../pages/ClientPage"
import { useSelector } from "react-redux"

export const UserRoutes = () =>{
    
    const { isAdmin } = useSelector(state => state.auth);
   
    return(
        <>
            <Navbar />
            <Routes>
                <Route path="users" element={<UsersPage/>}/>
                {!isAdmin || <>
                <Route path="users/register" element={<RegisterPage />}/>
                <Route path="users/edit/:id" element={<RegisterPage />}/> 
                </>}
                <Route path="clients" element={<ClientPage/>}/>
                <Route path="/" element={<Navigate to="/users"/>}/>
            </Routes>
        </>
    )
}