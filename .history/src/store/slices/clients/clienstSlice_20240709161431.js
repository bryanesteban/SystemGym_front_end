import { createSlice } from "@reduxjs/toolkit";



export const initialClientForm = {
    identification:'',
    name:'',
    lastName:'',
    email:'',
    phone_number:'',
    inscription_date:'',
    date_birthday:'',
    address:'',
}

export const clientsSlice = createSlice({
    name:'clients',
    intialState:{
        clients:[],
        clientSelected: initialClientForm,
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