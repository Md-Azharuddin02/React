import { useContext } from "react";
import style from "./Container.module.css";
import { ItemContext } from "../store/ItemContext";

export default function Welcome() {
  const { item } = useContext(ItemContext);
  return (
    item.length == 0 && (
      <p className={style.welcome}>No Task left, Enjoy your daya</p>
    )
  );
}
