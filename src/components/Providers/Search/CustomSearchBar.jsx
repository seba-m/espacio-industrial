import styles from "@/styles/components/Search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faTrash } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";
import { useDebounce } from "@/hooks/useDebounce";

export default function SearchBar({ onSearch, search, handleClearFilters }) {
  const [searchText, setSearchText] = useState(search);
  const debouncedSearchText = useDebounce(searchText, 300);

  useEffect(() => {
    onSearch(debouncedSearchText);
  }, [debouncedSearchText, onSearch, search]);

  const handleClear = () => {
    setSearchText('');
    handleClearFilters();
  }

  return (
    <div className={styles.search_container}>
      <input
        type="text"
        className={styles.search_input}
        placeholder="Busque el proveedor o servicio que necesite..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)} />
      <button onClick={(e) => onSearch(debouncedSearchText)} className={styles.search_button}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
      <button onClick={handleClear} className={`${styles.clear_button} ms-2`}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
}
