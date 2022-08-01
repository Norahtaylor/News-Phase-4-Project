import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar';
import './App.css';
import Homepage from './components/Homepage';


function App() {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch("http://api.mediastack.com/v1/news?access_key=54f9e8289ca44e551dc591b1c52f079f&categories=entertainment")
    .then(res => res.json())
    .then(articles => setArticles(articles))},
    [])
    // console.log(articles.data)

    const articleData = articles.data
    console.log(articleData)

    // const articlesList = articleData.map((article) => (
    //   <Homepage
    //  key = {article.id} 
    //  title = {article.title} 
    //  author = {article.author}
    //  description= {article.description}
    //  image= {article.image} />))

    //  console.log(articlesList)

  return (
    <div>
    <NavBar />
      <div>
        {/* {articlesList} */}
      </div>
    </div>
  );
}

export default App;
