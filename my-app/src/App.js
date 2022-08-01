import {useState, useEffect} from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Login from './components/Login'
import ArticleList from './components/ArticleList'

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

    console.log(articlesList)


  return (
    <div >
      <h1>Test</h1>
      <li></li>
      <NavBar/>
      <Login/>
      <ArticleList />
      
     
    </div>
  );
}

export default App;
