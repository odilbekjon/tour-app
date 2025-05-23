import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "./Context/LangContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <Provider>
        <App />
      </Provider>
    {/* </BrowserRouter> */}
  </React.StrictMode>
)
