import {useState, useEffect} from 'react';
import { Router, Routes, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar'
import Login from './components/Login'
import Signup from './components/Signup'
import Homepage from './components/Homepage';
import Blogs from './components/Blogs'
import ReadingList from './components/ReadingList';
import NewArticle from './components/NewArticle';


function App() {
  const [errors, setErrors] = useState()
  const [articles, setArticles] = useState([])
  const [blogs, setBlogs] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const [users, setUsers] = useState([])
  

  useEffect(() => {
    fetch('/articles')
    .then(res => {
      if (res.ok) {
          res.json().then(articles => setArticles(articles))
      } else {
          res.json().then(data => setErrors(data.errors))
      } 
    })
  }, []) 

  // console.log(articles)
  

  useEffect(() => {
  fetch('/users')
    .then(res => {
      if (res.ok) {
        res.json().then(users => setUsers(users))
      } else {
        res.json().then(data => setErrors(data.errors))
      }
    }) 
  }, [])
  // console.log(users)
  
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
     id = {article.id} 
     title = {article.title} 
     link = {article.url}
     summary = {article.description}
     image = {article.image}
     category = {article.category}
     fav = {article.favorite} />))

     const userList = users.map((user) => (
      <Homepage userId={user.id} />
     ))

  const blogList = blogs.map((blog) => (
    <Blogs
      key={blog.id}
      title={blog.title}
      link={blog.url}
      summary={blog.summary}
      image={blog.imageUrl}
      newsSite={blog.newsSite}
      date={blog.published_at} />
      ))


 


  useEffect(() => {
    // auto-login
    fetch("http://localhost:4000/me").then((r) => {
      if (r.ok) {
        r.json().then((currentUser) => setCurrentUser(currentUser));
      }
    });
  }, []);


     const updateUser = (user) => setCurrentUser(user)
    //  console.log(currentUser)

  return (

   <div>
    <NavBar setCurrentUser={setCurrentUser} currentUser={currentUser}/>
   

      <Routes>
        <Route exact path="/" element={<Blogs blogList={blogList} />} />
        <Route exact path="/articles" element={<Homepage setCurrentUser={setCurrentUser} currentUser={currentUser} articleList={articleList} articles={articles} setArticles={setArticles}/>} />
        <Route exact path="/login" element={<Login updateUser={updateUser} />} />
        <Route exact path="/signup" element={<Signup updateUser={updateUser} />} /> 
        <Route exact path="/new-article" element={<NewArticle updateUser={updateUser} />} />
        <Route exact path="/ReadingList" element={<ReadingList />} />
      </Routes>

   </div>

  );
}

export default App;