import React from 'react'
import { useNavigate } from 'react-router'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'



function NavBar({setCurrentUser, currentUser}) {
  const navigate = useNavigate()

  function handleLogoutClick() {
    fetch("/logout", { 
      method: "DELETE" 
      })
        .then((r) => {
      if (r.ok) {
        setCurrentUser({});
        navigate('/')
      }
    });
  }
  return (
  
      <div >
     
        <nav className="nav">
          <ul>
            <h3>Space News</h3>
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
              <Link to="/profile">My Profile</Link>
            </li>
            <li>
              <Link to="/readinglist">Reading List</Link>
           
            </li>
            <li>
            <Link to="/blogs">Space Images</Link>
            </li>
          <li>
            {currentUser && currentUser.username ? `Welcome, ${currentUser.username}!` : ""}
          </li>
            <li>
            {currentUser && currentUser.username ? <button href= '/' onClick={handleLogoutClick} >Logout</button> : ""}
            </li>
           
          </ul>
        </nav>
    
      </div>

   
  )
}

export default NavBar