import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='bg-blue-500'>
        <div className='flex flex-row justify-between'>
            <NavLink to = "/">
                <div>
                <img src = "/logo.png" alt = "Logo"/>
                </div>
            </NavLink>
            <div>
                <NavLink to = "/">
                    <p>Home</p>
                </NavLink>
                <NavLink to = "/cart">
                    <div>
                    <FaCartShopping />
                    </div>
                </NavLink>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar