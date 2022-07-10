import Home from "../pages/Home";
import Single from "../pages/Singlee";
import Cities from "../pages/Cities";
import Import from "../pages/ImportantData";

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
        component: Cities
    },
    {
        name:"Import",
        path:"/malumotlar",
        component: Import
    }
]