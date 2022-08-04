import {useEffect, useState} from 'react';
import Card from '../Card';

function ReadingList() {
  const[reading, setReading] = useState([])
 
  useEffect(() => {
    fetch('/readinglist')
      .then(res => {
        if (res.ok) {
          res.json().then(reading => setReading(reading))
        } 
      })
  }, []) 
  console.log(reading)

  const readingList = reading.map((article) => (
      <Card
     id = {article.id} 
     titleRead = {article.title} 
     linkRead = {article.url}
     summaryRead = {article.description}
     imageRead = {article.image}
     categoryRead = {article.category}
     favRead = {article.favorite} />
   ))



 
  return (
    <div>
      <h1 className="reading">My Reading List</h1>
    <div>
      {reading.map((article) => (
      <Card
        idRead={article.id}
        titleRead={article.title}
        linkRead={article.url}
        summaryRead={article.description}
        imageRead={article.image}
        categoryRead={article.category}
        favRead={article.favorite} />
      ))}
    </div>
    </div>
  )
}

export default ReadingList;