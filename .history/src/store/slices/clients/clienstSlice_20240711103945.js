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
        addClient: (state, action) => {
            state.users = [
                ...state.clients,
                {
                    ...action.payload
                }
            ];
            state.clientSelected = initialClientForm;
            state.visibleClientForm = false;
        },

        loadingClient: (state, action) => {
            state.clients = action.payload;
        },

        onOpenClientForm: (state) => {
            state.visibleClientForm = true;
        },

        onCloseClientForm : (state) => {
            state.visibleClientForm = false;
            state.userSelected = initialClientForm;
        },

        loadingClientError: (state, {payload}) => {
            state.errors = payload;
        },
    }
});


export const {
    addClient,
    loadingClient,
    onOpenClientForm,
    onCloseClientForm,
    loadingClientError
} = clientsSlice.actions