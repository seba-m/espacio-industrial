import SearchBar from "@/components/Providers/Search/CustomSearchBar";
import Results from "@/components/Providers/Search/Results";
import Filters from "@/components/Providers/Search/Filters";

import { Spinner } from "flowbite-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useHotkeys } from "react-hotkeys-hook";
import { HelpModal } from "@/components/HelpModal";

export default function Search() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    subcategory: [],
    size: [],
    region: [],
    provincias: [],
    comunas: [],
  });

  const keyMap = {
    SEARCH: "ctrl+k",
    SEARCH_CLEAR: "ctrl+l",
    SEARCH_NEXT: "ctrl+right",
    SEARCH_PREV: "ctrl+left",
    FILTERS_CLOSE: "esc",
    TOGGLE_FUERA_FAENA: "ctrl+f",
    TOGGLE_DENTRO_FAENA: "ctrl+d",
    HELP: "ctrl+h",
  };

  useHotkeys(
    keyMap.SEARCH,
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      const element = document.getElementById("search");
      element.blur();
      element.focus();
    },
    { enableOnFormTags: ["input", "select", "textarea"] }
  );

  useHotkeys(
    keyMap.SEARCH_CLEAR,
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      setSearch("");
    },
    { enableOnFormTags: ["input", "select", "textarea"] }
  );

  useHotkeys(
    keyMap.SEARCH_PREV,
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      const element = document.querySelector(
        'svg[data-testid="NavigateBeforeIcon"]'
      );
      if (element) {
        const parent = element.parentElement;
        parent.click();
      }
    },
    { enableOnFormTags: ["input", "select", "textarea"] }
  );

  useHotkeys(
    keyMap.SEARCH_NEXT,
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      const element = document.querySelector(
        'svg[data-testid="NavigateNextIcon"]'
      );
      if (element) {
        const parent = element.parentElement;
        parent.click();
      }
    },
    { enableOnFormTags: ["input", "select", "textarea"] }
  );

  useHotkeys(
    keyMap.FILTERS_CLOSE,
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      const element = document.querySelectorAll("div.accordion");
      element.forEach((el) => {
        if (el.classList.contains("open")) {
          el.classList.remove("open");
          el.classList.add("closed");
          el.click();
        }
      });
    },
    { enableOnFormTags: ["input", "select", "textarea"] }
  );

  useHotkeys(
    keyMap.TOGGLE_FUERA_FAENA,
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      const element = document.getElementById("boton-fuera-faena");
      element.click();
    },
    { enableOnFormTags: ["input", "select", "textarea"] }
  );

  useHotkeys(
    keyMap.TOGGLE_DENTRO_FAENA,
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      const element = document.getElementById("boton-dentro-faena");
      element.click();
    },
    { enableOnFormTags: ["input", "select", "textarea"] }
  );

  useHotkeys(
    keyMap.HELP,
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();

      const modalInstance = document.getElementById("modal-help");
      if (!modalInstance) {
        setOpenModal(true);
      }
    },
    { enableOnFormTags: ["input", "select", "textarea"] }
  );

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
      setSearch(searchQuery || "");
      setLoading(false);
    }
  }, [router.isReady]);

  const handleFilterChange = (newFilters) => {
    setSearch("");
    setSelectedFilters(newFilters);
  };

  if (loading) {
    return (
      <div className="text-center w-full">
        <Spinner
          aria-label="loading"
          size="xl"
          className="text-center w-full"
        />
      </div>
    );
  }

  return (
    <div className="">
      <div className="flex flex-col justify-center items-center w-full mb-12">
        <SearchBar
          onSearch={setSearch}
          search={search}
          handleClearFilters={handleClearFilters}
        />
      </div>
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row md:columns-2 columns-1 mt-5">
          <Filters
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterChange}
            handleClearFilters={handleClearFilters}
          />
          <Results selectedFilters={selectedFilters} search={search} />
        </div>
        <HelpModal open={openModal} setOpen={setOpenModal} />
      </div>
    </div>
  );
}
