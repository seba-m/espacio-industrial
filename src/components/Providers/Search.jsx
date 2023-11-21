import SearchBar from "@/components/LandingPage/SearchBar"
import Results from "@/components/Providers/Search/Results"
import Filters from "@/components/Providers/Search/Filters"

export default function Search() {
  return <div className="container mx-auto my-5 content-center">
    <div className="flex flex-col justify-center items-center w-full">
      <SearchBar />
    </div>
    <div className="flex flex-col items-center md:flex-row md:columns-2 columns-1 mt-5">
      <Filters />
      {/* <Results /> */}
    </div>
  </div>;
};