import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { ItemContext } from "../store/ItemContext";
export default function DeleteButton({ index }) {
  const {handleDeleteItem}= useContext(ItemContext)
  return (
      <button
          type="button"
          className="btn btn-danger delete-btn"
          onClick={()=> handleDeleteItem(index)}
      >
      <MdDelete className="fs-5" />
    </button>
  );
}
