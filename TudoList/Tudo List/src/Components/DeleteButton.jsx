import { MdDelete } from "react-icons/md";
export default function DeleteButton({ ind, onDeleteItem }) {
  return (
      <button
          type="button"
          className="btn btn-danger delete-btn"
          onClick={()=> onDeleteItem(ind)}
      >
      <MdDelete className="fs-5" />
    </button>
  );
}
