
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
import Blogs from './components/Blogs'


function App() {
  const [errors, setErrors] = useState()
  const [articles, setArticles] = useState([])
  const [blogs, setBlogs] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  

  useEffect(() => {
    fetch('https://api.spaceflightnewsapi.net/v3/articles')
    .then(res => {
      if (res.ok) {
          res.json().then(articles => setArticles(articles))
      } else {
          res.json().then(data => setErrors(data.errors))
      } 
    })
  }, []) 
  
  useEffect(() => {
    fetch('https://api.spaceflightnewsapi.net/v3/blogs')
      .then(res => {
        if (res.ok) {
          res.json().then(blogs => setBlogs(blogs))
        } else {
          res.json().then(data => setErrors(data.errors))
        }
      })
  }, []) 

    const articleList = articles.map((article) => (
      <Homepage
     key = {article.id} 
     title = {article.title} 
     link = {article.url}
     summary = {article.summary}
     image = {article.imageUrl}
     newsSite = {article.newsSite}
     date = {article.published_at} />))

  const blogList = blogs.map((blog) => (
    <Blogs
      key={blog.id}
      title={blog.title}
      link={blog.url}
      summary={blog.summary}
      image={blog.imageUrl}
      newsSite={blog.newsSite}
      date={blog.published_at} />))


  useEffect(() => {
    // auto-login
    fetch("http://localhost:4000/me").then((r) => {
      if (r.ok) {
        r.json().then((currentUser) => setCurrentUser(currentUser));
      }
    });
  }, []);
  // if (currentUser) {
  //   return <h2>Welcome, {currentUser.username}</h2>
  // } 

     const updateUser = (user) => setCurrentUser(user)

  return (

   <div>

    {/* <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/> */}
    <NavBar setCurrentUser={setCurrentUser} currentUser={currentUser}/>
   
    
      <Routes>
        <Route exact path="/" element={<Homepage articleList={articleList} />} />
        <Route exact path="/login" element={<Login updateUser={updateUser} />} />
        <Route exact path="/signup" element={<Signup updateUser={updateUser} />} /> 
        <Route exact path="/profile" element={<MyProfile updateUser={updateUser} />} />
        <Route exact path="/articles" element={<ArticleList />} />
        <Route exact path="/blogs" element={<Blogs blogList={blogList} />} />
      </Routes>

   </div>

  );
}

export default App;
