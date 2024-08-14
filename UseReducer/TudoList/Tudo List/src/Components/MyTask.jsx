import DeleteButton from "./DeleteButton";
import { useContext } from "react";
import { ItemContext } from "../store/ItemContext";

function MyTask() {
  const {item}= useContext(ItemContext)
  return (
    <>
      {item.map((i, index) =>
       <div className="container app-cotainer" key={index}>
       <div className="row">
         <div className="col-5">
           <p className="input-feild">{i.name}</p>
         </div>
         <div className="col-4">
           <p className="date-field">{i.dueDate}</p>
         </div>
         <div className="col-1">
              <DeleteButton index={index}/>
         </div>
       </div>
     </div>
      )}
     
    </>
  );
}

export default MyTask;
