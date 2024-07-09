import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "./slices/users/usersSlice";
import { AuthSlice } from "./slices/auth/authSlice";
import { clientSlice } from "./slices/clients/clientsSlice";

export const store = configureStore ({
    reducer: {
        users: usersSlice.reducer,
        auth: AuthSlice.reducer,
        client: clientSlice.reducer,
    }
});