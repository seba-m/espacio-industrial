import { useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/components/Search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    router.push(`/buscar?consulta=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className={styles.search_container}>
      <input
        type="text"
        className={styles.search_input}
        placeholder="Busque el proveedor o servicio que necesite..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button className={styles.search_button} onClick={handleSearch}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
}
