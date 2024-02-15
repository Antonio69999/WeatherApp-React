import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

function Search({ onSearchChange }) {
  const [search, setSearch] = useState(null);
  const apiKey = "58c00ef5c6b64e00a2f102507230611";

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const options = {
    method: "GET",
  };

  const loadOptions = (inputValue) => {
    return fetch(
      `http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${inputValue}`
    )
      .then((response) => response.json())
      .then((cities) => {
        // Check if the response is an array
        if (Array.isArray(cities)) {
          return {
            options: cities.map((city) => {
              return {
                value: `${city.lat} ${city.lon}`,
                label: `${city.name}, ${city.country}`,
              };
            }),
          };
        } else {
          // Handle the case where the response is not an array
          console.error("City data not found in the API response");
          return { options: [] };
        }
      })
      .catch((err) => console.error(err));
  };

  const { t, i18n } = useTranslation();

  return (
    <AsyncPaginate
      placeholder={t("search.placeholder")}
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
}

export default Search;
