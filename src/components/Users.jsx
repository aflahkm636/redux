import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Users = () => {
    const [searchParams,setSearchParams]=useSearchParams()
  const showUsers=searchParams.get('filter')==='active';
    return (
    <div>
    <h1>user1</h1>
    <h1>user2</h1>
    <h1>user3</h1>
    <div>
        <button onClick={()=>setSearchParams({filter :'active'})}>ActiveUsers</button>
        <button onClick={()=>setSearchParams({})}>reset users</button>
    </div>
    {
        showUsers?<h1>active users</h1>: <h1>all users</h1>

    }
    </div>
  )
}

export default Users
