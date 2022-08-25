import React from 'react'
import { useAppSelector,useAppDispatch } from '../../hooks'
// import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'

export const IcecreamView = () => {
  
  // const numofIcecreams =  useSelector((state) => state.icecream.numofIcecreams)
  const [value, setValue] =React.useState(1)
  const numofIcecreams = useAppSelector((state) => state.icecream.numofIcecreams)
  const dispatch = useAppDispatch()
  return (
      <div>
          <h2> Number of Icecream -{numofIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order Icecream</button>
      <input
        type='number'
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))} />
      <button onClick={() => dispatch(restocked(value))}>Restocked Icecream</button>
    </div>
  )
}
