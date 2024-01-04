import { Navigate, Routes } from "react-router-dom"
import { UsersPage } from "../pages/UsersPage"

export const userRoutes = () =>{
    return(
        <>
            <Routes>
                <Routes path="users" element={<UsersPage/>}/>
                <Routes path="/" element={<Navigate to="/users"/>}/>
            </Routes>
        
        </>
    )
}