import React from 'react'
import { useAppSelector,useAppDispatch } from '../../hooks'
// import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice'

export const CakeView = () => {

  const numOfCakes =  useAppSelector((state) => state.cake.numofCakes)
  // const numOfCakes = useSelector((state) => state.cake.numOfCakes)
   const dispatch = useAppDispatch()
  return (
      <div>
      <h2> Number of Cake -{numOfCakes}</h2>
          <button onClick ={()=> dispatch(ordered())}>Order Cake</button>
          <button onClick={() => dispatch(restocked(5))}>Restocked Cake</button>
    </div>
  )
}

