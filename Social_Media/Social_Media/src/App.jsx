import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";
import { useState } from "react";
import PostContextProvide from "./store/post-store";

function App() {
  const [selectedTab, setSelectedTab]= useState("Home")
  return (
    <>
      <PostContextProvide>
      <div className="main-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="item-container">
          <Navbar />
          {selectedTab==='Home'? <PostList/> :  <CreatePost />  }
          <Footer />
        </div>
      </div>
      </PostContextProvide>
    </>
  );
}

export default App;
