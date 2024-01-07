export const formatDecimalNumber = (number) => {
  return Intl.NumberFormat("en-US", { style: "decimal" }).format(number);
};

//https://restcountries.com/

export const getAllCountries = async () => {
  const url = "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital,cca3";

  return await fetchData(url);
};

export const getDeatilsCountry = async (countryId) => {
  const url = `https://restcountries.com/v3.1/alpha/${countryId}?fields=flags,name,population,region,subregion,capital,tld,currencies,languages,borders`;

  return await fetchData(url);
};

const fetchData = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Response("Error: Failed to fetch countries", {
      statusText: response.statusText,
      status: response.status,
    });
  }

  const data = await response.json();

  return data;
};
