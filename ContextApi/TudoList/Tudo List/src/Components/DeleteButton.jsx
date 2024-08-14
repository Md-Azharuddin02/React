import { useContext } from "react";
import { ItemContext } from "../store/ItemContext";

function DeleteButton({ index }) {
  const {item, deleteItem}= useContext(ItemContext)
  return (
    <button
      type="button"
      className="btn btn-danger delete-btn"
      onClick={() => deleteItem(index)}
    ></button>
  );
}
export default DeleteButton;
