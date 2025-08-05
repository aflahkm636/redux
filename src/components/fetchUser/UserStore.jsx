import { configureStore } from "@reduxjs/toolkit";
import userReducer from  "./FetchUserSlice"

 const UserStore= configureStore({
    reducer:{
        user:userReducer
    }
 })

 export default UserStore;
 