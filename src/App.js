import { BrowserRouter , Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import './App.css';
import '../src/Assets/sass/main.scss';

// routes
import { routes } from "./routes/routes"


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map((route, index) => {
            return(
              <Route key={index} path={route.path} element={<route.component/>} />
            )
          })}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
