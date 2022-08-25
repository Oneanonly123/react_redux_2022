//*********Core Concept of Redux ******************//

// A store that holds the state of application
// An action that describes what happened in the application
// A reducer which handles the action and decides how to update the state


//*************Principal of Redux********************/

// Maintain our application state in a single object which would be managed
// by redux store

// The only way to change the state is to dispatch the action. an object
// that describes what  happened


//***********************Third Principal************* */

// To specify how the state tree is updated based on actions,
// you write pure reducer
 
const redux = require('redux')
const bindActionCreator = redux.bindActionCreators
const reduxLogger = require('redux-logger')

// created middleware
const logger = reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware

// method to combin reducer
const combineReducers = redux.combineReducers


// create a redux store
const createStore = redux.createStore
 
const CAKE_ORDERED = 'CAKE_ORDERED'

const CAKE_RESTOCKED = 'CAKE_RESTOCKED'

const ICECREAM_ORDERED = 'ICECREAM_ORDERED'


const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'


// Action is an object which has a type property
// Action createor is a function that return an object

function orderCake() { 
    return {
      type: CAKE_ORDERED,
      quantity:1 
    }
}


function restockCake(qty =1) { 
    return {
      type: CAKE_RESTOCKED,
      payload:qty 
    }
}


function orderIcecream(qty=1) { 
    return {
      type: ICECREAM_ORDERED,
      payload:1 
    }
}

function restockIcecream(qty=1) { 
    return {
      type: ICECREAM_RESTOCKED,
      payload:qty
    }
}

// Reducer specifies how the state changes based on response to acion
// sent to the store
// It is an function that accept an action as an argument and return the
// next state of an applications


 // ************* Using two action object to make our code look better
// const initialState = {
//     numOfCakes: 10,
//     numOfIcecream:20
    
// }

const initialCakeState = {
     numOfCakes: 10,
}

const initialIcecreamState = {
      numOfIcecream:20
}
 
   // (previousState, action) => newState
const cakereducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes:state.numOfCakes -1,
            }
         case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes:state.numOfCakes + action.payload,
            }
        default:
            return state
    }
}

const icecreamReducer = (state = initialIcecreamState, action) => {
    switch (action.type) {
         case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIcecream:state.numOfIcecream -action.payload,
            }
         case ICECREAM_RESTOCKED:
            return {
                ...state,
                numOfIcecream:state.numOfIcecream + action.payload,
            }
        // Each reducer can update its own portion of application state but it can
        // respond to any action dispatch in ice-cream action 
        case CAKE_ORDERED:
            return {
                ...state,
                numOfIcecream:state.numOfIcecream + -1,
            }
        default:
            return state
    }
}
// Redux Store

// Responsibilities
   //1.Hold application state
   //2. Allow access to state via getState()
   //3. Allow state to be updated via dispatch(action)
   //4. Registers listeners via subscribe(listener)
   //5. Handles unregistering of listeners via the function returned by subscribe(listener)

// passing multiple reducer
const rootReducer = combineReducers({
    cake: cakereducer,
    iceCream:icecreamReducer
})

const store = createStore(rootReducer)
console.log('Initial State', store.getState())

const unsubscribe = store.subscribe(() => {
     console.log('Updated store', store.getState())
})

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(3))

// helper action 
const action = bindActionCreator({ orderCake, restockCake , orderIcecream,restockIcecream}, store.dispatch)
action.orderCake() 
action.orderCake()
action.orderCake()
action.restockCake(3)
action.orderIcecream()
action.orderIcecream()
action.orderIcecream()
action.restockIcecream(3)
unsubscribe() 