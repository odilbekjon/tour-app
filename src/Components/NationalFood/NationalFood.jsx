import React from 'react'
import { LastCarousel } from '../Carousels/LastCarousel/LastCarousel'
import './nationalFood.scss'

export const NationalFood = () => {
  return (
    <div className='national_food_wrapper'>
      <div className='container'>
        <div className='national_food_header'>
          <h3>Milliy taomlar</h3>
        </div>
        <LastCarousel />
      </div>
    </div>
  )
}
