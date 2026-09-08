import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export function SearchProvider({ children, initialQuery = "" }) {
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useSearch = () => useContext(SearchContext);
