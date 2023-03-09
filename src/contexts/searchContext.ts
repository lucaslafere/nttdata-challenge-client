/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from "react";

const SearchContext = createContext({
  search: "",
  setSearch: (search: string) => {},
});

export default SearchContext;
