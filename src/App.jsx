import React from 'react'
import './App.css'
import { Routes,Route } from "react-router-dom"
import Home from "./components/home"
import OrderSummary from '../../react-router/src/OrderSummary'
import Nomatch from '../../react-router/src/components/Nomatch'
import Products from '../../react-router/src/components/Products'
import Featuredproducts from '../../react-router/src/components/Featuredproducts'
import Newproducts from '../../react-router/src/components/Newproducts'
import Users from '../../react-router/src/components/Users'
import Userdetails from '../../react-router/src/components/Userdetails'
import Navbar from '../../react-router/src/components/Navbar'
// import About from "./components/About"
const LazyAbout=React.lazy(()=>import('./components/About'))





function App() {
  return (
    <>
    <Navbar/>
     <Routes>
    <Route path="/" element={<Home/>} ></Route>
    <Route path="about" element={ 
      <React.Suspense fallback='loading...'>
        <LazyAbout/>
        </React.Suspense>}/>
    <Route path="order-summary" element={ <OrderSummary/>} ></Route>
    <Route path="*" element={ <Nomatch/>} ></Route>
    <Route path="products" element={ <Products/>} >
    <Route index element={<Featuredproducts/>}/>
    <Route path="feature-products" element={<Featuredproducts/>}/>
    <Route path="new-products" element={<Newproducts/>}/>
    </Route>
    <Route path='users' element={<Users/>}/>
    <Route path='users/:usersId' element={<Userdetails/>}/>
    

  </Routes>
    </>
 
  )
}

export default App
