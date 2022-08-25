import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './app/features/store'
import App from './App'
import './index.css'

// To provide redux store to react application redux
// library export the component Provider 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
     <App />
    </Provider>
   </React.StrictMode>,
)
