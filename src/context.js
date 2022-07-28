import React, { useState, useEffect, useContext } from "react";
import { estateWithPurpose, estateWithAll, searchEstate } from "./utils/api";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showfilter, setShowfilter] = useState(false);

  const [estatesForSale, setEstatesForSale] = useState([]);
  const [estatesForRent, setEstatesForRent] = useState([]);

  //Flters state
  const [rentFrequency, setRentFrequency] = useState("monthly");
  const [minPrice, setMinPrice] = useState("10000");
  const [maxPrice, setMaxPrice] = useState("50000");
  const [bathsMin, setBathsMin] = useState("1");
  const [furnishingStatus, setFurnishingStatus] = useState("furnished");
  const [categoryExternalID, setCategoryExternalID] = useState("4");
  const [roomsMin, setRoomsMin] = useState("1");
  const [purpose, setPurpose] = useState("");

  //search term

  const [searchTerm, setSearchTerm] = useState("abu dhabi");
  const [searchedEstate, setSearchedEstate] = useState([]);

  useEffect(() => {
    try {
      estateWithPurpose("for-sale").then((data) => {
        const result = data.data.hits;
        setEstatesForSale(result);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const loadSale = () => {
    setLoading(true);
    estateWithPurpose("for-sale").then((data) => {
      const result = data.data.hits;
      setEstatesForSale(result);
      setLoading(false);
    });
  };

  const loadRent = () => {
    setLoading(true);
    estateWithPurpose("for-rent").then((data) => {
      const result = data.data.hits;
      setEstatesForSale(result);
      setLoading(false);
    });
  };

  useEffect(() => {
    try {
      setLoading(true);
      estateWithPurpose("for-rent").then((data) => {
        const result = data.data.hits;
        setEstatesForRent(result);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const displayMenu = () => {
    setShowMenu(!showMenu);
  };

  const displayFilter = () => {
    setShowfilter(!showfilter);
  };

  const FetchAllFiltered = () => {
    setLoading(true);
    setEstatesForRent([]);
    setEstatesForSale([]);
    estateWithAll(
      purpose,
      rentFrequency,
      categoryExternalID,
      minPrice,
      maxPrice,
      bathsMin,
      furnishingStatus,
      roomsMin
    ).then((data) => {
      setLoading(false);
      if (purpose === "for-rent") {
        const result = data.data.hits;
        setEstatesForRent(result);
      } else {
        const result = data.data.hits;
        setEstatesForSale(result);
      }

      console.log(data);
    });
  };

  const searchEstateTerm = () => {
    setLoading(true);
    setSearchedEstate([]);
    searchEstate(searchTerm).then((data) => {
      const result = data.data.hits;
      console.log(result);
      setSearchedEstate(result);
      setLoading(false);
    });
  };

  return (
    <AppContext.Provider
      value={{
        showMenu,
        displayMenu,
        displayFilter,
        showfilter,
        estatesForSale,
        estatesForRent,
        loading,
        FetchAllFiltered,
        setRentFrequency,
        setBathsMin,
        setCategoryExternalID,
        setMaxPrice,
        setMinPrice,
        setPurpose,
        setRoomsMin,
        setFurnishingStatus,
        loadSale,
        loadRent,
        setSearchTerm,
        searchTerm,
        searchEstateTerm,
        searchedEstate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
