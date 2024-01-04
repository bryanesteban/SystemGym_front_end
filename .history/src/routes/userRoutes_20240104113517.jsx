import { Navigate, Routes } from "react-router-dom"
import { UsersPage } from "../pages/UsersPage"
import { Navbar } from "../components/layout/Navbar"

export const userRoutes = ({login, handleLogout}) =>{
    return(
        <>
            <Navbar  login ={login} handleLogout={handleLogout} />
            <Routes>
                <Routes path="users" element={<UsersPage/>}/>
                <Routes path="/" element={<Navigate to="/users"/>}/>
            </Routes>
        
        </>
    )
}