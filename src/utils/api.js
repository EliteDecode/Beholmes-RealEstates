// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const estateHeaders = {
//   "X-RapidAPI-Key": "3209bed848mshecbf3deacd7dff0p11bc6fjsn5f8ba525b032",
//   "X-RapidAPI-Host": "bayut.p.rapidapi.com",
// };

// const baseUrl = "https://bayut.p.rapidapi.com";

// const createRequest = (url) => ({ url, headers: estateHeaders });

// export const estateApi = createApi({
//   reducerPath: "estateApi",
//   baseQuery: fetchBaseQuery({ baseUrl }),
//   endpoints: (builder) => ({
//     getEstateData: builder.query({
//       query: () =>
//         createRequest(
//           `/agencies/list?query=patriot&hitsPerPage=25&page=0&lang=en`
//         ),
//     }),
//   }),
// });

// export const { useGetEstateDataQuery } = estateApi;

export const estateWithPurpose = async (purpose) => {
  const response = await fetch(
    `https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=${purpose}&hitsPerPage=8&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_ESTATE_API_KEY,
        "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      },
    }
  );

  const data = await response.json();

  return { data };
};

export const estateWithAll = async (
  purpose,
  rentFrequency,
  categoryExternalID,
  minPrice,
  maxPrice,
  bathsMin,
  furnishingStatus,
  roomsMin
) => {
  const response = await fetch(
    `https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=${purpose}&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=${rentFrequency}&categoryExternalID=${categoryExternalID}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&bathsMin=${bathsMin}&furnishingStatus=${furnishingStatus}`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_ESTATE_API_KEY,
        "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      },
    }
  );

  const data = await response.json();

  return { data };
};

/**
 * It fetches data from an API and returns the data in JSON format.
 * @param id - the id of the property
 * @returns An object with a property called data.
 */
export const privateEstate = async (id) => {
  const response = await fetch(
    `https://bayut.p.rapidapi.com/properties/detail?externalID=${id}`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_ESTATE_API_KEY,
        "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      },
    }
  );

  const data = await response.json();

  return { data };
};
/**
 * It fetches data from an API and returns the data in JSON format
 * @param term - The search term
 * @returns An object with a property called data.
 */

export const searchEstate = async (term) => {
  const response = await fetch(
    `https://bayut.p.rapidapi.com/auto-complete?query=${term}&hitsPerPage=25&page=0&lang=en`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_ESTATE_API_KEY,
        "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      },
    }
  );

  const data = await response.json();

  return { data };
};
