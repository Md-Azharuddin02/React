import "./App.css";
import AddTask from "./Components/AddTask";
import Heading from "./Components/Heading";
import Container from "./Components/Container";
import Welcome from "./Components/Welcome";
import MyTask from "./Components/MyTask";
import ItemContextProvide from "./store/ItemContext";




function App() {

  return (
    <Container>
     <ItemContextProvide>
      <Heading />
      <AddTask />
      <Welcome />
      <MyTask/>
      </ItemContextProvide>
    </Container>
  );
}

export default App;
