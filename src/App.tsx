import { useState } from "react";
import SearchContext from "./contexts/searchContext";
import SearchPage from "./pages/Search";

function App() {
  const [search, setSearch] = useState("");
  return (
    <>
      <SearchContext.Provider value={{ search, setSearch }}>
        <SearchPage />
      </SearchContext.Provider>
    </>
  );
}

export default App;
