import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from 'react-router';
import Layout from "./layout/layout";
import '../src/Assets/sass/main.scss';
// react-slick-carousel 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// routes
import { routes } from "./routes/routes"

export const App = () => {
  return (
    // <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={<route.component />} />
            )
          })}
          <Route path="*" element={<Navigate to='/' />} />
        </Routes>
      </Layout>
    // </BrowserRouter>
  );
}

