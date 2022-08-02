import React from 'react'

function NavBar() {
  return (

    <div>
    <nav className="nav">
        <a className="title" href="/">Norahs News</a>
        <ul>
            <li>
                <a href="/ArticleList">Article List</a>
            </li>
            <li>
                <a href="/Login">Login</a>
            </li>
            <li>
                <a href="/Signup">Signup</a>
            </li>
        </ul>
    </nav>
    </div> 

  )
}

export default NavBar