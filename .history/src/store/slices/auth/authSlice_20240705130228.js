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
            state.isAdmin = action.payload.isAdmin;
            state.user = action.payload.user; 
            console.log(state);

        },

        onLogout: (state) => {
            state.isAuth = false,
            state.isAdmin = false,
            state.user = undefined
        }
    }
});

export const {
    onLogin,
    onLogout 
} = AuthSlice.actions;