import React from 'react'
import { FirstCarousel } from '../../Components/Carousels/FirstCarousel/FirstCarousel';
import { LastCarousel } from '../../Components/Carousels/LastCarousel/LastCarousel';
import { RestourantCarousel } from '../../Components/Carousels/RestourantCarousel';

export const CityPage = () => {

  return (
    <>
      <FirstCarousel
        title={'Toshkent diqqatga sazovor ziyoratgohlari'}
        text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
      />
      <div className='carousel_wrapper' style={{ background: '#D7E8E5' }}>
        <LastCarousel title={'Mehmonxonalar'} />
      </div>
      <LastCarousel title={'Istirohat bog’lari'} />
      <LastCarousel title={'Teatr va kino zallar'} />
      <RestourantCarousel title='Restoranlar' />
      <LastCarousel title={'Masjidlar'} />
    </>
  )
}
