import DeleteButton from "./DeleteButton";

function MyTask({ taskName, date, onDeleteItem, ind }) {
  return (
    <>
      <div className="container app-cotainer">
        <div className="row">
          <div className="col-5">
            <p className="input-feild">{taskName}</p>
          </div>
          <div className="col-4">
            <p className="date-field">{date}</p>
          </div>
          <div className="col-1">
            <DeleteButton onDeleteItem={onDeleteItem} ind={ind} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MyTask;
