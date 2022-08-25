import {configureStore} from '@reduxjs/toolkit'
import cakeReducer from './cake/cakeSlice'
import  icecreamReducer from './icecream/icecreamSlice'
import userReducer from './user/userSlice'

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
 

// Two inferred type 
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

