import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'
import Sidebar from '../Components/Sidebar'
import PostContextProvide from "../store/post-store";
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <PostContextProvide>
      <div className="main-container">
        <Sidebar />
        <div className="item-container">
          <Navbar />
          <Outlet/>
          <Footer />
        </div>
      </div>
      </PostContextProvide>
    </>
  );
}

export default App;
