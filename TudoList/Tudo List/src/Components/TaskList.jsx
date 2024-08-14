import MyTask from "./MyTask";
function TaskList({ arrayList, onDeleteItem }) {
  return (
    <>
      {arrayList.map((item, index) => (
        <MyTask
          key={index}
          taskName={item.name}
          date={item.dueDate}
          ind={index}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </>
  );
}
export default TaskList;
