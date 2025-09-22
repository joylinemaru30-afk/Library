import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
    <nav className='navbar navbar-expand-md navbar-ligth bg-ligth shadow-sm mt-1'>
<Link to="/"className="navbar-brand fw-bold m-2">City<span className="text-danger">Library</span></Link>

<button className="navbar-toggler"
type='button'
data-bs-toggle="collapse"
data-bs-target="#navbarcontents"
> 
<span className='navbar-toggler-icon'></span>
</button>
<div id ="navbarcontents" className='collapse navbar-collapse'>
<ul className='navbar-nav ms auto'>
        <li className='nav-item'>
            <b><Link to="/about" className='nav-link'>about</Link></b>

        </li>

        <li className='nav-item'>
            <b><Link to="/signin" className='nav-link'>Signin</Link></b>

        </li>

       

    </ul>


</div>

    </nav>
  )
}

export default Navbar