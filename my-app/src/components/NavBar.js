import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'



function NavBar() {
  return (
  
      <div >
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
              
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/:user">My Profile</Link>
            </li>
            <li>
              <Link to="/articles">News Articles</Link>
            </li>
          </ul>
        </nav>
      </div>

   
  )
}

export default NavBar