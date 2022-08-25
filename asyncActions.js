const redux = require('redux')
const createStore = redux.createStore
const thunkMiddleware = require('redux-thunk').default
const applyMiddleware = redux.applyMiddleware
const axios = require('axios')


//*****************Redux Concerns*************//
// Redux requires too much boilerplate code
// 1. Action
// 2. Action object
// 3. Action creator
// 4. Switch statement in a reducer

// A lot of other packages have to be installed to work with redux
// 1. Redux thunk - Async action
// 2. Immer - for nested function 
// 3. Redux- devtools 

// axios - Request to an end point
 
// State - 1. loading 2. data 3. Error

const initialState = {
    loading: false,
    users: [],
    error:''
}

// Actiona 1. Fetch_User_Requested 2. Fetch_User_Succeeded 3. Fetch_User_Failed

const Fetch_User_Requested = 'Fetch_User_Reuqested'
const Fetch_User_Succeeded = 'Fetch_User_Succeeded'
const Fetch_User_Failed = 'Fetch_User_Failed'

const fetchUsersRequest = () => {
    return {
        type:Fetch_User_Requested,
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type: Fetch_User_Succeeded,
        payload:users,
    }
}

const fetchUsersFailed = (error) => {
    return {
        type: Fetch_User_Failed,
        payload:error
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Fetch_User_Requested:
            return {
                ...state,
                loading:true
            }
        case Fetch_User_Succeeded:
            return {
                loading: false,
                users: action.payload,
                error:''
            }
        case Fetch_User_Failed:
            return {
                loading: false,
                users: [],
                error:action.payload
             }
    }
}

// Action creator is defined along with thunk creator which return function 
// instead of object and it doesn't have to pure
const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users').then(respose => {
            const users = response.data.map((user) => user.id)
            dispatch(fetchUsersSuccess(users))
        }).catch((error) => {
             // error message
            dispatch(fetchUsersFailed(error.message))
         })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))


store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch(fetchUsers())