import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Slice/userSlice";
import { adminApi } from "../Slice/adminApi";

export default configureStore({
    reducer: {
        user: userSlice,
        [adminApi.reducerPath]: adminApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(adminApi.middleware)
})