import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

function Search({ onSearchChange }) {
  const [search, setSearch] = useState(null);
  //   const [city, setCity] = useState(["Lyon"]);
  const apiKey = import.meta.env.VITE_API_KEY;

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const options = {
    method: "GET",
  };

  const loadOptions = (inputValue) => {
    return fetch(
      `http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${inputValue}`,
      options
    )
      .then((response) => response.json())
      .then((cities) => {
        // Check if the response is an array
        if (Array.isArray(cities)) {
          return {
            options: cities.map((city) => {
              return {
                value: `${city.lat} ${city.lon}`,
                label: `${city.name}`,
              };
            }),
          };
        } else {
          // Handle the case where the response is not an array
          console.error('City data not found in the API response');
          return { options: [] };
        }
      })
      .catch((err) => console.error(err));
  };
  

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
}

export default Search;
