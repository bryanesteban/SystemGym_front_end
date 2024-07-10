import { createSlice } from "@reduxjs/toolkit";



export const initialClientForm = {
    identification:'',
    name:'',
    lastName:'',
    email:'',
    phone_number:'',
    inscription_date:'',
    date_birthday:'',
    address:''
}

export const clientSlice = createSlice({
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
} = clientSlice.actions