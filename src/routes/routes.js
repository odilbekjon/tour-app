import Home from "../pages/Home";
import Single from "../pages/Singlee";
import Import from "../pages/ImportantData";
import { CityPage } from "../pages/InCity";
import City from "../pages/City";

export const routes = [
    {
        name:"Home",
        path:"/",
        component: Home
    },
    {
        name:"Single",
        path:"/single",
        component: Single
    },
    {
        name:"Cities",
        path:"/cities",
        component: City
    },
    {
        name:"Import",
        path:"/malumotlar",
        component: Import
    },
    {
        name:"City-page",
        path:"/city-page",
        component: CityPage
    }

]