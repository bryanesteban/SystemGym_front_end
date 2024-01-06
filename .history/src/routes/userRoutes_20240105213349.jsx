import { Navigate, Route, Routes } from "react-router-dom"
import { UsersPage } from "../pages/UsersPage"
import { Navbar } from "../components/layout/Navbar"

export const UserRoutes = ({login, handleLogout}) =>{
    return(
        <>
            <Navbar  login ={login} handleLogout={handleLogout} />
            <Routes>
                <Route path="users" element={<UsersPage/>}/>
                <Route path="users/register" element={<UsersPage/>}/>
                <Route path="/" element={<Navigate to="/users"/>}/>
            </Routes>
        
        </>
    )
}