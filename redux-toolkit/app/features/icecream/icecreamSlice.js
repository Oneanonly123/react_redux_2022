const { cakeActions } = require('../cake/cakeSlice')

const createSlice = require('@reduxjs/toolkit').createSlice
 
const initialState = {
    numofIcecreams :20
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: state => {
            state.numofIcecreams--
        },
        restocked: (state, action) => {
            state.numofIcecreams += action.payload 
        }
    },
    // extraReducers: {
    //     ['cake/ordered']: (state, action) => {
    //         state.numofIcecreams--
    //     }
    // }

    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, state => {
            state.numofIcecreams--
        })
    }
})

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions
