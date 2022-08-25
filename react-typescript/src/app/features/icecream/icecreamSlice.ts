import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import { ordered as cakeOrdered } from '../cake/cakeSlice'

 type InitialState = {
    numofIcecreams:number
}
const initialState:InitialState = {
    numofIcecreams :20
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: { 
        ordered: state => {
            state.numofIcecreams--
        },
        restocked: (state, action:PayloadAction<number>) => {
            state.numofIcecreams += action.payload 
        }
    },
    // extraReducers: {
    //     ['cake/ordered']: (state, action) => {
    //         state.numofIcecreams--
    //     }
    // }

    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, state => {
            state.numofIcecreams--
        })
    }
})

export default icecreamSlice.reducer
export const {ordered, restocked} = icecreamSlice.actions
