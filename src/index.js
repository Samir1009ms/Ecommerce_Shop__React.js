import React from "react";
import store from "./store/store"
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./pages/home/main";
import { Details } from "./pages/item-view/itemDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<App/>}>
            <Route path="/" element={<Main/>} />
            <Route path="item" element={<Details/>} />
            <Route path="*/" element={""} />
            <Route path="*/" element={""} />
          </Route>

        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
