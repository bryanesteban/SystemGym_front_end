import { createSlice } from "@reduxjs/toolkit";

const initialUserForm = {
    id:0,
    username:'',
    password:'',
    email:'',
    admin: false,
}

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users:[],
        userSelected: initialUserForm,
        visibleForm: false,

    },
    reducers: {
        addUser: (state, action) => {
            state.users = [
                ...state.users,
                {
                    ...action.payload
                }
            ];
            state.userSelected = initialUserForm;
            state.visibleForm = false;
        },
        removeUser: (state,action) =>{
            state.users = state.users.filter(user => user.id !== action.payload);
        },

        updateUser: (state, action) =>{
            state.users = state.users.map(u => {
                if(u.id === action.payload.id){
                    return {
                        ...action.payload,
                    }
                }
                return u; 
            });
            state.userSelected = initialUserForm;
            state.visibleForm = false;
        },

        loadingUsers: (state, action) => {
            state.users = action.payload;
        },

        OnUserSelectedForm: (state, action) => {
            state.userSelected = action.payload;
            state.visibleForm = true;
        }
    }

});

export const {
    addUser,
    removeUser, 
    updateUser, 
    loadingUsers
} = usersSlice.actions

