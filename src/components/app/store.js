import { configureStore } from '@reduxjs/toolkit';
import  postsSlicereducer from '../features/Slice';
export const store = configureStore({
    reducer:{
        post:postsSlicereducer
    }
})

export default store