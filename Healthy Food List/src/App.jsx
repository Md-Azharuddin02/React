import Heading from "./components/Heading";
import Food_list from "./components/Food_list";
import EmptyList from "./components/EmptyList";
import Container from "./components/Container";
import InputBox from "./components/InputBox";
import { useState } from "react";

function App() {
  let list = ["dal","rice"]
  let [List, setList] = useState(list)
  
  function changeOnKeyDown(e) {
    if (e.key === 'Enter') {
      let newItem = e.target.value
      e.target.value=""
      let newArr=[...List,newItem]
      setList(newArr)
      
    }
  }

  return (
    <>
      <Container>
      <Heading />
        <EmptyList getFoodList={List} />
        <InputBox changeOnKeyDown={(e)=> changeOnKeyDown(e)}/>
      <Food_list getFoodList={List} />
     </Container>
    </>
  );
}

export default App;
