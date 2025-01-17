const fetchMovies = async (heroName) => {
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const url = `https://www.omdbapi.com/?s=${heroName}&apikey=${apiKey}`;

  const response = await fetch(url);
  // Parse the JSON response
  const data = await response.json();
  return data.Search;
};

export default fetchMovies;
