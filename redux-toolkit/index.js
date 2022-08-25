const store = require('./app/features/store')

// name exports 
const cakeActions = require('./app/features/cake/cakeSlice').cakeActions
const icecreamActions = require('./app/features/icecream/icecreamSlice').icecreamActions     
const fetchUsers = require('./app/features/user/userSlice').fetchUsers
 console.log('Initial State', store.getState())

const unsubscribe = store.subscribe(() => {
     console.log('Updated State', store.getState())
 })


 store.dispatch(fetchUsers())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3))

// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.restocked(3))
// unsubscribe()