import React from 'react'

function NavBar() {
  return (

    <div>NavBar</div>
    <nav className="nav">
        <a href="/" className="title">Norahs News</a>
        <ul>
            <li>
                <a href="/ArticleList">Favorites</a>
            </li>
            <li>
                <a href="/Login">Login</a>
            </li>
        </ul>
    </nav>

  )
}

export default NavBar