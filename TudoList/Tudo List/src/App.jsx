import "./App.css";
import AddTask from "./Components/AddTask";
import Heading from "./Components/Heading";
import TaskList from "./Components/TaskList";
import Container from "./Components/Container";
import { useState } from "react";
import Welcome from "./Components/Welcome";
import ItemContext from "../src/"
function App() {
  let list = [
    {
      name: "Task-1",
      dueDate: "23/3/2023",
    },
    {
      name: "Task-2",
      dueDate: "23/3/2024",
    },
    {
      name: "Task-3",
      dueDate: "23/3/2025",
    },
  ];

  const [item, setItem] = useState(list); // state for getting data from name and field

  const handleReceivedItem = (itemName, dueDate) => {
    if (!itemName == "" && !dueDate == "") {
      setItem((currentItem) => [
        ...currentItem,
        { name: itemName, dueDate: dueDate },
      ]);
    }
  };

  const handleDeleteItem = (index) => {
    setItem((currentItem) => currentItem.filter((value, ind) => !ind == index));
  };

  return (
    <Container>
      <Heading />
      <AddTask onAddItem={handleReceivedItem} />
      {item.length == 0 && <Welcome />}
      <TaskList arrayList={item} onDeleteItem={handleDeleteItem} />
    </Container>
  );
}

export default App;
