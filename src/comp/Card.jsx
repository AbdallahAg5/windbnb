import Image from 'next/image'
import React from 'react'
import {Star} from './Icons'

function Card({data}) {
    const {superHost , title , rating , type , photo} = data
  return (
    <div className='card'>
       <figure>
           <Image 
           src={photo} 
           alt='card_img' 
           width={350}  
           height={ 238.35}
           className='card__img'
            />
       </figure>
       <div className='card__description'>
         {superHost ? <span className='card__host__type'>Super Host</span> : null } 
          <p className='airbnb__type'>{type}</p>
          <div className='raiting__container'>
              <Star  className="raiting__star" />
             <p className='card__raiting'>{rating}</p>
          </div>
       </div>
          <p className='card__title'>{title.substring(0,25) + '...'}</p>
    </div>
  )
}

export default Card