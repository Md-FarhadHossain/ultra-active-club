import React from 'react'
import './Activites.css'

const Activites = (props) => {

    const {image, title,description,time} = props.activity;
    console.log(title)

  return (
    <div className='activity-box'>
        <div className='activity-img'>
            <img src={image} alt="activity image" />
        </div>

        <div className='activity-description'>
            <h2>{title}</h2>
            <p>{description}</p>
            <h2>Time: {time} minute</h2>
            <button>Add to list</button>
        </div>
    </div>
  )
}

export default Activites