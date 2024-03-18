import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}
/*
Button.PropTypes = {
  text: PropTypes.string.isRequired,
};
*/
export default Button;
/* export to App.js */
