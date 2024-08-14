import { createContext } from "react";
import { useReducer } from "react";

export const ItemContext = createContext([]);

//Recuder metod
const ItemReducer = (currentState, action) => {
  let updateItem = currentState;
  if (action.type === "ADD_NEW_ITEM") {
    //add new item
    if (action.payload.itemName !== "" && action.payload.dueDate !== "") {
      const newItem = [
        ...currentState,
        { name: action.payload.itemName, dueDate: action.payload.dueDate },
      ];
      updateItem = newItem;
    }
    // delete item
  } else if (action.type === "DELETE_ITEM") {
    const deletedItem = currentState.filter(
      (_, ind) => ind !== action.payload.index
    );
    updateItem = deletedItem;
  }
  return updateItem;
};

// array of item list 
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

//context provider
const ItemContextProvide = ({ children }) => {
 
  const [item, dispatchItem] = useReducer(ItemReducer, list);

  // add item method
  const handleReceivedItem = (itemName, dueDate) => {
    const addAction = {
      type: "ADD_NEW_ITEM",
      payload: {
        itemName,
        dueDate,
      },
    };
    dispatchItem(addAction);
  };

  // delete item method
  const handleDeleteItem = (index) => {
    const deleteAction = {
      type: "DELETE_ITEM",
      payload: {
        index,
      },
    };
    dispatchItem(deleteAction);
    };
  return (
    <ItemContext.Provider
      value={{ 
        item,
        handleReceivedItem,
        handleDeleteItem,
      }}
      >
      {children}
      </ItemContext.Provider>
  );
};

export default ItemContextProvide;
