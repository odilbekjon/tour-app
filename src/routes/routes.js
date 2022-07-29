import { Home } from "../pages/Home";
import { Single } from "../pages/Singlee";
import { ImportantData } from "../pages/ImportantData";
import { CityPage } from "../pages/InsideCity";
import { City } from "../pages/City";
import { Filter } from "../pages/Filter";
import { About } from "../pages/About";
import { Planning } from "../pages/Planning";


export const routes = [
    {
        name: "Home",
        path: "/",
        component: Home
    },
    {
        name: "Single",
        path: "/single",
        component: Single
    },
    {
        name: "Cities",
        path: "/cities",
        component: City
    },
    {
        name: "Import",
        path: "/data",
        component: ImportantData
    },
    {
        name: "City-page",
        path: "/city-page",
        component: CityPage
    },
    {
        name: "Filter-page",
        path: "/filter",
        component: Filter
    },
    {
        name: "About",
        path: "/about",
        component: About
    },
    {
        name: "Rejalashtirish",
        path: "/planning",
        component: Planning
    },
]
