const redux = require('redux')
const produce = require('immer').produce


const initialState = {
    name: 'Rahul',
    address: {
        street: '123 Main st',
        city: 'Boston',
        state:'MA'
    },
}

const STREET_UPDATED = 'STREET_UPDATED'

// Action creator
const updateStreet = (street) => {
    return {
        type: STREET_UPDATED,
        payload:street
    }
}

// This code will increase burden to constantly track the changes so we use Library - Immer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STREET_UPDATED:
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street:action.payload
            //     }
            // }
            return produce(state, (draft) => {
              // immer library allow us to update draft
            draft.address.street =action.payload
            })
        default:
            return state
    }
}

const store = redux.createStore(reducer)

console.log('Initial State', store.getState())

const unsubscribe = store.subscribe(() => {
    console.log('Updated State', store.getState())
})

store.dispatch(updateStreet('Nehru Colony'))

unsubscribe()



// MiddleWare is the suggested way to extend Redux with custom functionality
// Provide a third party extension point between dispatching an action,
// and the moment it reaches the reducer
// Use middleware for logging . crash reporting and performing asynchronous tasks etc