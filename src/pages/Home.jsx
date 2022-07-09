import { HomeCarousel } from "../Components/Carousels/HomeCarousel/HomeCarousel";
import { NationalFood } from "../Components/NationalFood/NationalFood";
import { NationalGames } from "../Components/NationalGames/NationalGames";
import { Ziyoratgoh } from "../Components/Ziyoratgoh/Ziyoratgoh";

export default function Home() {
  return (
    <>
      <HomeCarousel />
      <Ziyoratgoh />
      <NationalGames />
      <NationalFood />
    </>
  )
}