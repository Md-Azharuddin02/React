import style from "./Display.module.css";

function Display({ calC }) {
  return (
    <input type="text" className={style.displayStyle} value={calC} readOnly />
  );
}
export default Display;
