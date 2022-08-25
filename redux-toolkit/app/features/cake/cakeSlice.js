const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfCakes :10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state) => {
            // no need to explicity return the state
            state.numOfCakes--
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload
        },
    },
})

module.exports = cakeSlice.reducer

// this slice take care of define action type , action object , action creator
// switch statement  
module.exports.cakeActions = cakeSlice.actions