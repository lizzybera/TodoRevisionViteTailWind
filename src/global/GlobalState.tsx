import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    taskUser : null || ""
}

const GlobalState = createSlice({
  name: "AuthState",
  initialState,
  reducers: {
    createUser : (state : any, {payload}: any)=>{
        state.taskUser = payload
    },
    logOut : (state : any)=>{
        state.taskUser = null
    }
  }
});

export const {createUser, logOut} = GlobalState.actions

export default GlobalState.reducer
