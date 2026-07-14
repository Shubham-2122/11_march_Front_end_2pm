import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Read all user
export const readuser = createAsyncThunk(
    'readuser',async(data,{rejectWithValue})=>{
        try {
            const res = await axios.get("http://localhost:3000/user")
            const result = await res.data;
            return result
        } catch (error) {
            return rejectWithValue;
        }
    }
)

export const userSlice = createSlice({
    name:"userDetails",
    initialState:{
        pending : true,
        users : [],
        isreject : ""
    },
    reducers:{
        userPending:(state,action)=>{
            state.pending = true
        },
        userFullfield:(state,action)=>{
            state.pending = false;
            state.users.push(action.payload)
        },
        userReject:(state,action)=>{
            state.pending = false;
            state.isreject = action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(readuser.pending,(state,action)=>{
            state.pending = true
        })
        .addCase(readuser.fulfilled,(state,action)=>{
            state.pending = false
            state.users = action.payload
        })
        .addCase(readuser.rejected,(state,action)=>{
            state.pending = false
            state.isreject = action.payload
        })
    }
})
export const {userFullfield,userPending,userReject} = userSlice.actions;

export default userSlice.reducer;