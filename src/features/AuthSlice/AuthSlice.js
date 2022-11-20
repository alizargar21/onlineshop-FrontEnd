import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../services/httpServices";
const LOCAL_STORAGE_AUTH_KEY = "Auth";

export const asyncSigninUser = createAsyncThunk("auth/signinUser" , async(payload , {rejectWithValue})=>{
    try {
        const {data} =await http.post("/user/register" , payload)
        console.log(data)
        
        
        localStorage.setItem(LOCAL_STORAGE_AUTH_KEY , JSON.stringify(data))
        return data
    } catch (error) {
        return rejectWithValue([] , error)
    }
})
export const asyncLoginUser = createAsyncThunk("auth/loginUser" , async(payload , {rejectWithValue})=>{
    try {
        const {data} =await http.post("/user/login" , payload)
        console.log(data)
        
        
        localStorage.setItem(LOCAL_STORAGE_AUTH_KEY , JSON.stringify(data))
        return data
    } catch (error) {
        return rejectWithValue([] , error)
    }
})


const initialState = {
  user: null,
  error: null,
  loading: false,
  isLogin : false
};
const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    logout: (state, action) => {
        localStorage.removeItem(LOCAL_STORAGE_AUTH_KEY)
        return {...state , user : null , isLogin : false}
    },
    alreadyUser: (state , action) =>{
            return {...state , user : action.payload , isLogin: true}
    }
  },
  extraReducers : {
    [asyncSigninUser.fulfilled] : (state , action)=> {
        return {...state , user : action.payload , loading : false , error : null , isLogin: true}
    },
    [asyncSigninUser.pending] : (state , action)=> {
        return {...state , user : {} , loading : true , error : null , isLogin : false}
    },
    [asyncSigninUser.rejected] : (state , action)=> {
        return {...state , user : {} , loading : false , error : action.error , isLogin : false}
    },
    [asyncLoginUser.fulfilled] : (state , action)=> {
        return {...state , user : action.payload , loading : false , error : null , isLogin :true}
    },
    [asyncLoginUser.pending] : (state , action)=> {
        return {...state , user : {} , loading : true , error : null , isLogin : false}
    },
    [asyncLoginUser.rejected] : (state , action)=> {
        return {...state , user : {} , loading : false , error : action.error , isLogin : false}
    },
  }
});
export const { logout , alreadyUser} = AuthSlice.actions;
export default AuthSlice.reducer;
