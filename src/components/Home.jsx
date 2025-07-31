import React from 'react'
import { useNavigate } from 'react-router-dom'
import Tode from './Tode'

function Home() {
   const navigate= useNavigate()
  return (
    <>
       <div>
      homepage
    </div>
    <button onClick={()=>navigate('Order-Summary')}>
        place order
    </button>
    <Tode/>
    </>
 
  )
}

export default Home

