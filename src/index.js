import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import store from "./app/store";
import "./index.css";
import "./global.css";
import App from "./App";
import { AppProvider } from "./context";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Sale from "./pages/sale/Sale";
import Rent from "./pages/rent/Rent";
import Estate from "./pages/singleEstate/Estate";
import Search from "./pages/search/Search";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/forsale" element={<Sale />} />
          <Route exact path="/forrent" element={<Rent />} />
          <Route exact path="/estate/:estateID" element={<Estate />} />
          <Route exact path="/search" element={<Search />} />
        </Routes>
      </Router>
    </AppProvider>
  </React.StrictMode>
);
