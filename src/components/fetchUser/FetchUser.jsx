import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./FetchUserSlice";

 export function User(){
     const dispatch =useDispatch();
     const { user, status, error }=useSelector((state)=>state.user)

     useEffect(()=>{
        dispatch(fetchUser())
     },[dispatch]);
     
  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

     return (
<>
<h3>user</h3>
{user&&(
    <div>
        <p>name:{user.name} </p>
        <p>email:{user.email}</p>
    </div>
)}


</>

     )
}