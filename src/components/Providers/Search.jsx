import SearchBar from "@/components/Providers/Search/CustomSearchBar"
import Results from "@/components/Providers/Search/Results"
import Filters from "@/components/Providers/Search/Filters"

import { Spinner } from 'flowbite-react';
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Search() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    subcategory: [],
    size: [],
    region: [],
    provincias: [],
    comunas: [],
  });

  const handleClearFilters = () => {
    const resetFilters = {
      category: [],
      subcategory: [],
      size: [],
      region: [],
      provincias: [],
      comunas: [],
    };
    setSelectedFilters(resetFilters);
  };

  useEffect(() => {
    if (router.isReady) {
      setLoading(true);
      const { consulta: searchQuery } = router.query;
      setSearch(searchQuery || '');
      setLoading(false);
    }
  }, [router.isReady]);

  const handleFilterChange = (newFilters) => {
    setSearch('');
    setSelectedFilters(newFilters);
  };


  if (loading) {
    return <div className='text-center w-full' >
      <Spinner aria-label="loading" size="xl" className='text-center w-full' />
    </div>;
  }

  return <div className="container mx-auto my-5 px-2 lg:px-5 content-center">
    <div className="flex flex-col justify-center items-center w-full">
      <SearchBar onSearch={setSearch} search={search} handleClearFilters={handleClearFilters} />
    </div>
    <div className="flex flex-col md:flex-row md:columns-2 columns-1 mt-5">
      <Filters selectedFilters={selectedFilters} onFilterChange={handleFilterChange} handleClearFilters={handleClearFilters} />
      <Results selectedFilters={selectedFilters} search={search} />
    </div>
  </div>;
};