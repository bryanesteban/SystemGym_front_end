import { createSlice } from "@reduxjs/toolkit";

export const clientsSlice = createSlice({
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
} = clientsSlice.actions