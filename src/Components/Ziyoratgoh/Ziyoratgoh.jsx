import React from 'react'
import { FirstCarousel } from '../Carousels/FirstCarousel/FirstCarousel';

import './ziyoratgoh.scss'

export const Ziyoratgoh = () => {
  return (
    <div className='first_carousel_wrapper'>
      <div className='container'>
        <div className='first_carousel_header'>
          <h3 className='carousel__header'>Top ziyoratgohlar</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <FirstCarousel/>
      </div>
    </div>
  )
}
