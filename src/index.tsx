import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./Redux/store";
import Header from "./Compontent/Header";
import { RouterProvider } from "react-router-dom";
import router from "./Compontent/Router";
import Footer from "./Compontent/Footer";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Provider store={store}>
        <Header />
        {/* <DataApi /> */}

        <RouterProvider router={router} />
        <Footer />
      </Provider>
    </React.StrictMode>
  </Provider>
);
