import React from 'react'
import './Card.css'
const Card = () => {
  return (
    <div class="container">
    <div class="card">
      <img src="https://lh3.googleusercontent.com/ytP9VP86DItizVX2YNA-xTYzV09IS7rh4WexVp7eilIcfHmm74B7odbcwD5DTXmL0PF42i2wnRKSFPBHlmSjCblWHDCD2oD1oaM1CGFcSd48VBKJfsCi4bS170PKxGwji8CPmehwPw=w200-h247-no" alt="Person" class="card__image"/>
      <p class="card__name">Lily-Grace Colley</p>
      <div class="grid-container">
  
        <div class="grid-child-posts">
          156 Post
        </div>
  
        <div class="grid-child-followers">
          1012 Likes
        </div>
  
      </div>
     
      <button class="btn draw-border">Follow</button>
      <button class="btn draw-border">Message</button>
  
    </div>
    
    
  </div>
  
  )
}

export default Card