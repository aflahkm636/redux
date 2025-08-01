import React from 'react'
import { addItem } from './components/CartREduce'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const dispatch =useDispatch();
 const cart = useSelector(state => state.cart); 
  console.log(cart);  
  return (
    <div>
        <button onClick={() => dispatch(addItem('aflah','aflah@gmail.com'))}>
        Add Item
      </button>
    </div>
  )
}

export default App
