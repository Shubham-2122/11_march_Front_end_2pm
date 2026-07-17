import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const adminApi = createApi({
    reducerPath : "adminApi",
    baseQuery : fetchBaseQuery({
        baseUrl : "http://localhost:3000/"
    }),

    tagTypes : ["Admin"],

    endpoints:(builder) => ({
        
        // get query
        getAdmin: builder.query({
            query : ()=> "admin",
            providesTags:["Admin"]
        }),
    })
});


export const {
    useGetAdminQuery,
    
} = adminApi;