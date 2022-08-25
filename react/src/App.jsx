import { useState } from 'react'
import './App.css'
import {CakeView} from './app/features/cake/CakeView'
import {IcecreamView} from './app/features/icecream/IcecreamView'
import { UserView } from './app/features/user/UserView'


function App() {
  return (
    <div className="App">
      <div>
      <CakeView />
      {/* <UserView /> */}
         <IcecreamView />
        <UserView/>
        </div>
    </div>
  )
}

export default App
