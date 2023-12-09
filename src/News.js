import React from 'react'

export default function News(props) {
    console.log(props)
  return (
    <div className='news'>
      <div className='news-img'>
        {
          props.article.urlToImage!==null?
          <img src={props.article.urlToImage} alt=''></img>:
          <img src="https://www.shutterstock.com/image-vector/house-not-available-icon-flat-260nw-1030785001.jpg" alt=''></img>

        }
        
      </div>
      <h2>{props.article.title}</h2>
      <p>{props.article.description?.substring(0,100).concat("...")} <a href={props.article.url} target='_blank_'>Read more</a></p>
     
      <div className='source'>
        <p>Author : {props.article.author}</p>
        <p>{props.article.source.name}
        </p>

      </div>
    </div>
  )
}
