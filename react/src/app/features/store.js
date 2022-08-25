import {configureStore} from '@reduxjs/toolkit'
import cakeReducer from '../features/cake/cakeSlice'
import  icecreamReducer from '../features/icecream/icecreamSlice'
import userReducer from '../features/user/userSlice'

// not working though
// const logger = reduxLogger.createLogger

// It is going to work same as rootreducer 
export const store = configureStore({
    reducer: {
        icecream: icecreamReducer,
        cake: cakeReducer,
        user:userReducer,
    },
    // middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),
})
 
export default store

