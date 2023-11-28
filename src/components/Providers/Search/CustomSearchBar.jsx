import styles from "@/styles/components/Search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";
import { useDebounce } from "@/hooks/useDebounce";

export default function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState('');
  const debouncedSearchText = useDebounce(searchText, 300);

  useEffect(() => {
    onSearch(debouncedSearchText);
  }, [debouncedSearchText, onSearch]);

  return (
    <div className={styles.search_container}>
      <input
        type="text"
        className={styles.search_input}
        placeholder="Busque el proveedor o servicio que necesite..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)} />
      <button className={styles.search_button}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
}
