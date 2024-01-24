import styles from "./Toggle.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function Toggle() {
  const setDark = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  };

  const setLight = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  };

  const toggle = (e) => {
    if (e.target.checked) setDark();
    else setLight();
  };

  const storageTheme = localStorage.getItem("theme");

  if (storageTheme === "dark") setDark();
  else setLight;

  return (
    <label className={styles.toggle}>
      <input
        defaultChecked={storageTheme === "dark"}
        onChange={toggle}
        type="checkbox"
      />
      <FontAwesomeIcon className={styles.moon} icon={faMoon} />
      <FontAwesomeIcon className={styles.sun} icon={faSun} />
    </label>
  );
}

export default Toggle;
