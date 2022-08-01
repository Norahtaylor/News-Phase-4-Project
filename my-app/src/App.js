import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

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
  return (
    <div >
      <NavBar/>
      <Login/>
      <ArticleList/>
      
     
    </div>
  );
}

export default App;
