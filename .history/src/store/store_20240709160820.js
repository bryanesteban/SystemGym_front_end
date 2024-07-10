import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "./slices/users/usersSlice";
import { AuthSlice } from "./slices/auth/authSlice";
import { clientsSlice } from "./slices/clients/clienstSlice";

export const store = configureStore ({
    reducer: {
        users: usersSlice.reducer,
        auth: AuthSlice.reducer,
        client: clientsSlice.reducer,
    }
});