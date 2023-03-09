import { useState } from "react";
import MovieContext from "./contexts/movieContext";
import SearchContext from "./contexts/searchContext";
import SearchPage from "./pages/Search";

function App() {
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState({
    title: "",
    plot: "",
    poster: "",
    actors: "",
    rating: 0,
  });
  return (
    <>
      <SearchContext.Provider value={{ search, setSearch }}>
        <MovieContext.Provider value={{ movie, setMovie }}>
          <SearchPage />
        </MovieContext.Provider>
      </SearchContext.Provider>
    </>
  );
}

export default App;
