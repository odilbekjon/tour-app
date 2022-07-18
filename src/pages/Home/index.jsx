import { FirstCarousel } from "../../Components/Carousels/FirstCarousel/FirstCarousel";
import { HomeCarousel } from "../../Components/Carousels/HomeCarousel/HomeCarousel";
import { LastCarousel } from "../../Components/Carousels/LastCarousel/LastCarousel";
import { NationalFood } from '../../Components/NationalFood/NationalFood'
import Map from "../../Components/Map/Map";

export const Home = () => {
  return (
    <>
      <HomeCarousel />
      <div style={{ background: 'rgba(56, 138, 123, 0.2)' }}>
        <FirstCarousel title={'Top ziyoratgohlar'} text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} />
      </div>
      <LastCarousel title={'Mashxur xalq o’yinlari'} text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} />
      <NationalFood />
      <Map/>
    </>
  )
}