import SearchBar from "@/components/Providers/Search/CustomSearchBar"
import Results from "@/components/Providers/Search/Results"
import Filters from "@/components/Providers/Search/Filters"

import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    subcategory: [],
    size: [],
    region: [],
    provincias: [],
    comunas: [],
  });

  const handleFilterChange = (newFilters) => {
    setSelectedFilters(newFilters);
  };

  return <div className="container mx-auto my-5 px-2 lg:px-5 content-center">
    <div className="flex flex-col justify-center items-center w-full">
      <SearchBar onSearch={setSearch}/>
    </div>
    <div className="flex flex-col md:flex-row md:columns-2 columns-1 mt-5">
      <Filters selectedFilters={selectedFilters} onFilterChange={handleFilterChange} />
      <Results selectedFilters={selectedFilters} search={search} />
    </div>
  </div>;
};