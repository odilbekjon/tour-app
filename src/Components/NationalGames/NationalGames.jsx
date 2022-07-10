import React from 'react'
import { LastCarousel } from '../Carousels/LastCarousel/LastCarousel'
import './nationalGames.scss'

export const NationalGames = () => {
  return (
    <div className='national_games_wrapper'>
      <div className='container'>
        <div className='national_games_header'>
          <h3 className='carousel__header'>Mashxur xalq o’yinlari</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <LastCarousel />
      </div>
    </div>
  )
}
