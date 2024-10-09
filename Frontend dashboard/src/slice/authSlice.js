import {createApi ,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const API_URL=import.meta.env.VITE_BASE_URL
const authApi =createApi({
    baseQuery:fetchBaseQuery({baseUrl:API_URL}),
    endpoints:(builder)=>({
        login:builder.mutation({
            query:(data)=>({
                url:"/login",
                method:"POST",
                body:data,
            })
        })
    })
})

export const {useLoginMutation}=authApi