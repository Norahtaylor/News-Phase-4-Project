
import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar'
import Login from './components/Login'
import ArticleList from './components/ArticleList'
import Signup from './components/Signup'
import MyProfile from './components/MyProfile';
import Homepage from './components/Homepage';



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
    fetch("http://api.mediastack.com/v1/news?access_key=54f9e8289ca44e551dc591b1c52f079f&categories=entertainment")
    .then(res => res.json())
    .then(articles => setArticles(articles))},
    [])
    // console.log(articles.data)

    const articleData = articles.data
    console.log(articleData)

    const articlesList = articleData.map((article) => (
      <Homepage
     key = {article.id} 
     title = {article.title} 
     author = {article.author}
     description= {article.description}
     image= {article.image} />))

     console.log(articlesList)


  return (
    <div>
    <NavBar />
      <div>
        {articlesList}
      </div>
    </div>


      // {/* <Routes>
      //   <Route path='/' element={<Homepage />} />
      //   <Route path='/signup' element={<Signup />} />
      // </Routes> */}

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
