import React from 'react'
import './Blog.css'

const Blog = (props) => {
  return (
    <div className='blogContainer'>
        <h1>{props.title}</h1>
        <p>{props.body}</p>
    </div>
  )
}

export default Blog