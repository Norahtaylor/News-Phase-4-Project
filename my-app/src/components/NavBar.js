import React from 'react'
import { useNavigate } from 'react-router'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

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
            <li>
            <Link to="/">NASA</Link>
            </li>
            <li>
              <Link to="/articles">Space Articles</Link>
            </li>
            <li>
              <Link to="/new-article">New Article</Link>
            </li>
            <li>
              <Link to="/readinglist">Reading List</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          {/* <li>
            {currentUser && currentUser.username ? `Welcome, ${currentUser.username}!` : ""}
          </li> */}
          </ul>
          <li>
            {currentUser && currentUser.username ?  <Button onClick={handleLogoutClick} variant="outline-light">Logout</Button> : ""}
            </li>
        </nav>
        <div className="welcome">
        {currentUser && currentUser.username ? `Welcome, ${currentUser.first_name}!` : ""}
        </div>
      </div>

   
  )
}

export default NavBar