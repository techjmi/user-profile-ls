import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <div className="header">
    <ul className="list">
        <li>
            <Link to='/' style={{textDecoration:"none"}}>Home</Link>
        </li>
        <li>
            <Link to='/login' style={{textDecoration:"none"}}>Login</Link>
        </li>
        <li>
            <Link to='/register' style={{textDecoration:"none"}}>Register</Link>
        </li>
        
    </ul>
    <div className="profile_img">
        <Link to='/details'><img src='https://picsum.photos/200' alt='profile'/></Link>
        
    </div>
   </div>
  )
}

export default Header