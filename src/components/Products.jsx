import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
  return (
    <>
     <div>
      <input type="search" placeholder='search products'/>

     </div>
    <div>
        <nav className="secondary">
            <Link to="feature-products" className="nav-link">faetured</Link>
            <Link to="new-products" className="nav-link">new</Link>
        </nav>
        <Outlet/>
    </div>
    
    </>
   
  )
}

export default Products
