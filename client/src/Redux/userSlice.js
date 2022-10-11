import {createSlice} from '@reduxjs/toolkit'



const userSlice = createSlice({
    name:'cart',
    initialState:{
        currentUser:localStorage.getItem("token")||null,
        isFetching:false,
        error:false
    },
    reducers:{
        loginStart:(state)=>{
            state.isFetching=true;
            state.error=false;
        },
        loginSuccess:(state,action)=>{
            state.isFetching=false;
            state.error=false;
            state.currentUser = action.payload?.token;
            localStorage.setItem("token",state.currentUser);
        },
        loginFailure:(state)=>{
            state.isFetching=false;
            state.error=true;
        },
    }
})

export const {loginStart,loginSuccess,loginFailure} = userSlice.actions;
export default userSlice.reducer;