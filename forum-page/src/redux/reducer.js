import { createSlice,  } from '@reduxjs/toolkit';
//import axios from 'axios';
// import { registerUser } from './action'
const initialState = {
  loading: false,
  token: null,
  isLogin:null,
  error: null,
 
};


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    addData: (state, action) => {
      const list = {
     
        data: action.payload,
      };
      console.log(action.payload, "DATA");
      state.data = action.payload;
    },
loginSuccess : (state,action)=>{
  state.isLogin = true;
  state.error = null;
  state.token = action.payload.token;

},

loginFailure : (state,action)=>{
  state.isLogin = false;
  state.error = action.payload.error;
state.token = null;
}


  },
 });


 

export const {loginSuccess,loginFailure, addData} = userSlice.actions;

export default userSlice.reducer;
