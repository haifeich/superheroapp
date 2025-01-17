const fetchHeroData = async (heroName) => {
  const apiKey = import.meta.env.VITE_SUPERHERO_API_KEY;
  const url = `/api/${apiKey}/search/${heroName}`;

  const response = await fetch(url);

  // Parse the JSON response
  const data = await response.json();
  return data;
};

export default fetchHeroData;
