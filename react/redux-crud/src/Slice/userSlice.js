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

// add product 
export const creatUser = createAsyncThunk(
    'creatUser',async(data,{rejectWithValue})=>{
        try {
            const res = await axios.post("http://localhost:3000/user",data)
            const result = await res.data;
            return result;
            
        } catch (error) {
            return rejectWithValue;
        }
    }
)

// delete 

export const deleteUser = createAsyncThunk(
    'deleteUser',async(id,{rejectWithValue})=>{
        try {
            const res = await axios.delete(`http://localhost:3000/user/${id}`)
            return res.data;
            
        } catch (error) {
            return rejectWithValue;
        }
    }
)

export const EditUser = createAsyncThunk(
    'EditUser',async(data,{rejectWithValue})=>{
        try {
            const res = await axios.put(`http://localhost:3000/user/${data.id}`,data)
            return res.data;
            
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
        // read
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

        // create new data

        .addCase(creatUser.pending,(state,action)=>{
            state.pending = true
        })
        .addCase(creatUser.fulfilled,(state,action)=>{
            state.pending = false
            state.users.push(action.payload)
        })
        .addCase(creatUser.rejected,(state,action)=>{
            state.pending = false
            state.isreject = action.payload
        })

        //delete data

         .addCase(deleteUser.pending,(state,action)=>{
            state.pending = true
        })
        .addCase(deleteUser.fulfilled,(state,action)=>{
            state.pending = false
            state.users = state.users.filter((data,index) => data.id !== action.payload.id)
        })
        .addCase(deleteUser.rejected,(state,action)=>{
            state.pending = false
            state.isreject = action.payload
        })

        // edit data 
        
         .addCase(EditUser.pending,(state,action)=>{
            state.pending = true
        })
        .addCase(EditUser.fulfilled,(state,action)=>{
            state.pending = false
            
            state.users = state.users.map((data)=>
                
                data.id === action.payload.id ? action.payload.id : data  
            )

        })
        .addCase(EditUser.rejected,(state,action)=>{
            state.pending = false
            state.isreject = action.payload
        })

    }
})
export const {userFullfield,userPending,userReject} = userSlice.actions;

export default userSlice.reducer;