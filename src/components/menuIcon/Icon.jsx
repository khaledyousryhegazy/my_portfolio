import styles from "./Icon.module.css";

function Icon() {
  return (
    <label htmlFor="burger" className={`lg:hidden ${styles.burger}`}>
      <input id="burger" type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
}

export default Icon;
