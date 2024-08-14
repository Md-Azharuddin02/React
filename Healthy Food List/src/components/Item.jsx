function Item({ item, chageListBgColor, colorStatus }) {

  return (
    <li className={`list-group-item ${colorStatus && "d-none"}`} >
      {(e)=>chageListBgColor(e)}
      {item}
      <button className="btn btn-success" onClick={chageListBgColor}>
        Buy
      </button>
    </li>
  );
}
export default Item;
