import { createSlice } from "@reduxjs/toolkit";


const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {

    isAuth:false,
    isAdmin:false,
    user: undefined,
}
export const AuthSlice = createSlice({
    name: 'Auth',
    initialState: initialLogin,
    reducers: {
        onLogin: (state, action ) => {
            state.isAuth = true;
            isAdmin = action.payload.isAdmin;
            user = action.payload.user; 
        }
    }
})