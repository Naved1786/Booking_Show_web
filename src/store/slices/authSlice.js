import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isAuthenticated: null,
}


const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout: (state, action) => {
            state.isAuthenticated = false;
            state.user = null;
        },

        profileManage:(state,action)=>{
            
        }
    }
})

export const { login, logout,profileManage } = authSlice.actions
export default authSlice.reducer;
