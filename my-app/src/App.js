import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar'
import Login from './components/Login'
import ArticleList from './components/ArticleList'
import Signup from './components/Signup'
import MyProfile from './components/MyProfile';

function App() {
  const [articles, setArticles] = useState([])

  // const fetchArticles = () => {
  //   fetch('/articles')
  //     .then(res => {
  //       if (res.ok) {
  //         res.json().then(setArticles)
  //       } else {
  //         res.json().then(data => setErrors(data.error))
  //       }
  //     })
  // }

  useEffect(() => {
    fetch("/articles")
      .then((res) => res.json())
      .then((articles) => setArticles(articles));
  }, []);

  console.log(articles)

  const articlesList = articles.map((article) => (
     <ArticleList
    key = {article.id} 
    title = {article.title} 
    author = {article.author}
    description= {article.description} />))


  return (
    <Router>
    <div >
      {articlesList}
        <nav>
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
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/:user">
            <MyProfile />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/articles">
            <Articles/>
          </Route>
      </Switch>
      </div>
    </Router>

    //   <NavBar/>
    //     <Link className="nav-link" to={'/sign-in'}>
    //       <Login />
    //     </Link>
    
    //   <ArticleList />
    //   <Signup />
      
     
    // </div>
    // </Router>
  );
}

export default App;
