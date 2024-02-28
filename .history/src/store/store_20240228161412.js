import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "./slices/users/usersSlice";
import { AuthSlice } from "./slices/auth/authSlice";

export const store = configureStore ({
    reducer: {
        users: usersSlice.reducer,
        auth: AuthSlice.reducer,
    }
});