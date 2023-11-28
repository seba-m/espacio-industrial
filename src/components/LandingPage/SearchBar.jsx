import styles from "@/styles/components/Search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  return (
    <div className={styles.search_container}>
      <input
        type="text"
        className={styles.search_input}
        placeholder="Busque el proveedor o servicio que necesite..."/>
      <button className={styles.search_button}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
}
