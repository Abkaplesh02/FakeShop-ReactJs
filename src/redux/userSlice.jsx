import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{
        user:null
    },
    reducers:{
        addToUser:(state,action)=>{
            state.user=action.payload;
        },
        removeUser:(state)=>{
             state.user=null;
        }
    }
})

export const {addToUser,removeUser}=userSlice.actions;
export default userSlice.reducer;