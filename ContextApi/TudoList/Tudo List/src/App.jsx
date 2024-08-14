import "./App.css";
import AddTask from "./Components/AddTask";
import Heading from "./Components/Heading";
import Container from "./Components/Container";
import { useState } from "react";
import Welcome from "./Components/Welcome";
import { ItemContext } from "./store/ItemContext";
import MyTask from "./Components/MyTask";

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

  const addNewItem = (itemName, dueDate) => {
    if (itemName !== "" && dueDate !== "") {
      setItem((currentItem) => [
        ...currentItem,
        { name: itemName, dueDate: dueDate },
      ]);
    }
  };

  const deleteItem = (index) => {
    setItem((currentItem) => item.filter((_,ind) => ind !== index));
  };


  return (
    <Container>
      <ItemContext.Provider
        value={{
          item: item,
          addNewItem: addNewItem,
          deleteItem: deleteItem
        }}
      >
        <Heading />
        <AddTask />
        {item.length == 0 && <Welcome />}
        <MyTask />
      </ItemContext.Provider>
    </Container>
  );
}

export default App;
