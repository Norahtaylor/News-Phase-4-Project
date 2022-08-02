
import {useState, useEffect} from 'react';
import { Router, Routes, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar'
import Login from './components/Login'
import ArticleList from './components/ArticleList'
import Signup from './components/Signup'
import MyProfile from './components/MyProfile';
import Homepage from './components/Homepage';



function App() {
  const [errors, setErrors] = useState()
  const [articles, setArticles] = useState([])

 
  
  useEffect(() => {
    fetch(`http://api.mediastack.com/v1/news?access_key=${process.env.REACT_APP_API_KEY}&categories=entertainment`)
    .then(res => {
      if (res.ok) {
          res.json().then(articles => setArticles(articles.data))
      } else {
          res.json().then(data => setErrors(data.errors))
      } 
    })
  }, []) 
  
    const articlesList = articles.map((article) => (
      <Homepage
     key = {article.id} 
     title = {article.title} 
     author = {article.author}
     description= {article.description}
     image = {article.image}
     date = {article.published_at} />))


  return (

   <div>
    <NavBar />
      <Routes>
        <Route path="/" element={<Homepage articleList={articlesList} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/:user" element={<MyProfile />} />
        <Route path="/articles" element={<ArticleList />} />
      </Routes>

   </div>

  );
}

export default App;
