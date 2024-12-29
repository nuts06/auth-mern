import React from 'react'
import {Link, NavLink} from "react-router-dom";
const Header = () => {
  return (
    <div className='bg-slate-200'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
            <h1 className='font-bold'>Auth App</h1>
            </Link>
            <ul className='flex gap-4'>
               <li>
                  <NavLink 
                    to='/' 
                    className={({ isActive }) => isActive ? 'font-bold text-blue-600' : ''}
                  >
                    Home
                  </NavLink>
                </li>
                <NavLink 
                    to='/about' 
                    className={({ isActive }) => isActive ? 'font-bold text-blue-600' : ''}
                  >
                    About
                  </NavLink>
                  <NavLink 
                    to='/signin' 
                    className={({ isActive }) => isActive ? 'font-bold text-blue-600' : ''}
                  >
                    Sign In
                  </NavLink>
            </ul>
        </div>
    </div>
  )
}

export default Header