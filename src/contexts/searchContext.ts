import { createContext } from "react";

const SearchContext = createContext({
  search: "",
  setSearch: (search: string) => {},
});

export default SearchContext;
