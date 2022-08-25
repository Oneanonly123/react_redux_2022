const configureStore = require('@reduxjs/toolkit').configureStore
// const { getDefaultMiddleware } = require('@reduxjs/toolkit')
const reduxLogger = require('redux-logger')
const cakeReducer = require('../features/cake/cakeSlice')
const icecreamReducer = require('../features/icecream/icecreamSlice')
const userReducer = require('../features/user/userSlice')

// not working though
// const logger = reduxLogger.createLogger

// It is going to work same as rootreducer 
const store = configureStore({
    reducer: {
        icecream: icecreamReducer,
        cake: cakeReducer,
        user:userReducer,
    },
    // middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),
})
 
module.exports = store

