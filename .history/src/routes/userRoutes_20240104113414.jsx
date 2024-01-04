import { Routes } from "react-router-dom"

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