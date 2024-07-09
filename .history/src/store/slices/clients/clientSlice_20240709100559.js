import { createSlice } from "@reduxjs/toolkit";
import { loadingUsers } from "../users/usersSlice";

export const clientSlice = createSlice({
    name:'clients',
    intialState:{
        clients:[],
    },
    reducers:{
        loadingClient: (state, action) => {
            state.clients = action.payload;
        }
    }
});


export const {
    loadingClient
} = clientSlice.actions