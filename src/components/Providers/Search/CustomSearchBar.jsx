import styles from "@/styles/components/Search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faTrash } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/router';
import { useDebounce } from "@/hooks/useDebounce";

export default function SearchBar({ onSearch, search, handleClearFilters }) {
  const [searchText, setSearchText] = useState(search);
  const debouncedSearchText = useDebounce(searchText, 300);
  const router = useRouter();
  const inputRef = useRef();

  useEffect(() => {
    setSearchText(search);
  }, [search])

  useEffect(() => {
    onSearch(debouncedSearchText);
  }, [debouncedSearchText, onSearch]);

  const handleClear = () => {
    setSearchText('');
    handleClearFilters();
  }

  useEffect(() => {
    const handleRouteChange = () => {
      const current = inputRef?.current;
      
      if (!current) return;
      
      inputRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    router.events.on('routeChangeComplete', handleRouteChange);

    //create a timeout to wait for the page to load


    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      setTimeout(() => {
        handleRouteChange();
      }, 100);
    }
  }, [router.events]);

  useEffect(() => {
    inputRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className={styles.search_container}>
      <input
        id="search"
        ref={inputRef} 
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
