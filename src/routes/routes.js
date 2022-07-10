import Home from "../pages/Home";
import Single from "../pages/Singlee";
import Cities from "../pages/Cities";
import Import from "../pages/ImportantData";
import About from "../pages/About";
import Contact from "../pages/Contact";

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
    },
    {
        name:"About",
        path:"/about",
        component: About
    },
    {
        name:"Contact",
        path:"/contact",
        component: Contact
    }
]