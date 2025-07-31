import React from 'react'
import { useParams } from 'react-router-dom'

const Userdetails = () => {
    const {usersId}=useParams();
  return (
    <div>
      deatils of users{usersId}
    </div>
  )
}

export default Userdetails
