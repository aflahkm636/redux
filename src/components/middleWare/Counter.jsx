import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './CounterReducer'

function Counter() {
    const count =useSelector((state)=>state.count)
    const dispatch=useDispatch()
  return (
    <div>
        <h2>{count}</h2>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  )
}

export default Counter
