import { createSlice } from "@reduxjs/toolkit";

    const initialState={
        UserId:null,
        LoginStatus:false
    }

const SessionSlice=createSlice({
    name:"session",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.UserId=action.payload;
            state.LoginStatus=true
            },
        logout:(state)=>{
                state.UserId=null;
                state.LoginStatus=false
                }
    }
}
)
export const {login,logout}=SessionSlice.actions
export default SessionSlice.reducer;