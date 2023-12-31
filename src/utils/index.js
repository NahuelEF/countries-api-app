export const formatDecimalNumber = (number) => {
  return Intl.NumberFormat("en-US", { style: "decimal" }).format(number);
};

export const fetchData = async (url) => {
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
