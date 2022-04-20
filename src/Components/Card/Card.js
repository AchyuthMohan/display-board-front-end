import React from 'react'
import './Card.css'
// import Home from '../../Pages/Home/Home'
const Card = (props) => {
  return (
    <div class="container">
    <div class="card">
      <img src={props.img} alt="Person" class="card__image"/>
      <p class="card__name">{props.name}</p>
      <div class="grid-container">
  
        {/* <div class="grid-child-posts">
          156 Post
        </div> */}
  
        
      </div>
     
      <button class="btn draw-border">Price: {props.price}</button>
      {/* <button class="btn draw-border">Message</button> */}
  
    </div>
    
    
  </div>
  
  )
}

export default Card