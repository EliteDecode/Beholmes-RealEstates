import React, { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Filter from "./components/filter/Filter";
import Rent from "./pages/rent/Rent";
import Sale from "./pages/sale/Sale";
import Loading from "./components/loader/Loading";

import { useGlobalContext } from "./context";

const App = () => {
  const { loading, loadSale, loadRent } = useGlobalContext();

  useEffect(() => {
    loadRent();
    loadSale();
  }, []);

  return (
    <>
      <Navbar />

      {loading && <Loading />}
      <Sale simplified />
      <Rent simplified />
    </>
  );
};

export default App;
