import React from 'react'
import Card from './Card'
import data from "@/data/data.json"

function MainSection() {
  return (
    <div>
        <div className='search__result'>
             <h1 className='searched__location'>Stays in Finland </h1>
             <p className='number__places'>12+ stays</p>
        </div>
        <div className='card__container'>
                {data.map((e,i) => <Card data={e} key={i} /> )}
        </div>
    </div>
  )
}

export default MainSection


