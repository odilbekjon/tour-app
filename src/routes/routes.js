import { Home } from "../pages/Home";
import { Single } from "../pages/Singlee";
import { Import } from "../pages/ImportantData";
import { CityPage } from "../pages/InsideCity";
import { City } from "../pages/City";
import { Filter } from "../pages/Filter";

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
        component: Import
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
    }

]