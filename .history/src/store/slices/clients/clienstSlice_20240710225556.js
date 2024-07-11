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

export const initialErrors = {
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
    initialState:{
        clients:[],
        clientSelected: initialClientForm,
        visibleClientForm: false,
        errors: initialErrors,
    },
    reducers:{
        loadingClient: (state, action) => {
            state.clients = action.payload;
        },

        onOpenClientForm: (state) => {
            state.visibleClientForm = true;
        },

        onCloseForm : (state) => {
            state.visibleClientForm = false;
            state.userSelected = initialClientForm;
        },
        loadingError: (state, {payload}) => {
            state.errors = payload;
        }
    }
});


export const {
    loadingClient
} = clientsSlice.actions