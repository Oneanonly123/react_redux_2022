import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type InitialState = {
    numofCakes:number
}
const initialState:InitialState = {
    numofCakes :10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state) => {
            // no need to explicity return the state
            state.numofCakes--
        },
        restocked: (state, action:PayloadAction<number>) => {
            state.numofCakes += action.payload
        },
    },
})

export default cakeSlice.reducer

// this slice take care of define action type , action object , action creator
// switch statement  
export const {ordered, restocked} = cakeSlice.actions