import { configureStore } from '@reduxjs/toolkit';
import  postsSlicereducer from '../features/Slice';
import authSlicereducer from '../features/Authslice';
import  searchUserReducer  from '../features/SearchUserSlice';
import sessionSliceReducer from '../features/SessionSlice';

export const store = configureStore({
    reducer:{
        post:postsSlicereducer,
        auth:authSlicereducer,
        searchUser: searchUserReducer,
        session:sessionSliceReducer
    }
})

export default store