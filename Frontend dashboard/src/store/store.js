import { configureStore } from "@reduxjs/toolkit";
import authApi from "../slice/authSlice";

const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware),
});

export default store; // Make sure to export store as default
