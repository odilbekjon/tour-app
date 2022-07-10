import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
<<<<<<< HEAD
=======
import './App.css';
>>>>>>> 641ea344342856d6f8fc8db524da1166378d8498
import '../src/Assets/sass/main.scss';
// react-slick-carousel 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// routes
import { routes } from "./routes/routes"


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={<route.component />} />
            )
          })}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
