import logo from './logo.svg';
import './App.css';

function App() {

  const fetchProductions = () => {
    fetch('/articles')
      .then(res => {
        if (res.ok) {
          res.json().then(setProductions)
        } else {
          res.json().then(data => setErrors(data.error))
        }
      })
  }
  return (
    <div >
      <NavBar/>
      <Login/>
      <ArticleList/>
      
     
    </div>
  );
}

export default App;
