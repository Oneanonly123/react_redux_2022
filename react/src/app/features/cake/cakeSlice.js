import {createSlice} from '@reduxjs/toolkit'

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

export default cakeSlice.reducer

// this slice take care of define action type , action object , action creator
// switch statement  
export const {ordered, restocked} = cakeSlice.actions