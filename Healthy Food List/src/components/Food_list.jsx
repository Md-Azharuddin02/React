import Item from "./Item";
import { useState } from "react";

function Food_list({ getFoodList}) {

  let [color, setColor] = useState([]);
  function chageListBgColor(index) {
    let newArr = [...color, index]
    setColor(newArr)
  }

  return (
    <>
      <ul className="list-group">
        {getFoodList.map((item, index) => (
          <Item
            key={index}
            item={item}
            colorStatus={color.includes(index)}
            arr={color}
            chageListBgColor={() => chageListBgColor(index)}
            />
        ))}
      </ul>
    </>
  );
}
export default Food_list;
