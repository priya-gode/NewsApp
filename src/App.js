
import './App.css';
import { useEffect, useState } from 'react';
import News from './News';

function App() {
  let [category,setCategory]=useState("india");
  let [date,setDate]=useState(new Date());
  let [articles,setArticles]=useState([]);
  
  useEffect(()=>{
    
    fetch(`https://newsapi.org/v2/everything?q=${category}&from=${date}&apiKey=1dd53e95d13a426cb83ff997fb6fa104`)
    .then((response)=>response.json())
    .then((news)=>{
      setArticles(news.articles);
      console.log(news.articles);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[category,date]
  )
  return (
    <div className="App">
      <header className='header'>
      <h1>Parso Tak</h1>
      <input type='text' onChange={(event)=>{
        if(event.target.value!=="")
        {
        setCategory(event.target.value);
        }
        else
        {
          setCategory("india");
        }
      }} placeholder='search news'></input>
      <input type='date' onChange={(event)=>{
        if(event.target.value!=="")
        {
        setDate(event.target.value);
        }
        else
        {
        setDate(new Date());
        }
      }} placeholder='Enter Date for News'></input>
      </header>
      
      <section className='newsarticles'> 
      {
        articles.length!==0?

        articles.map((article)=>{
          return(
            <News article={article}/>
          )
        }):<h3>No News Found For Searched Text</h3>
      }
      
     
      </section>
    </div>
  );
}

export default App;
