import { createSlice } from "@reduxjs/toolkit";

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