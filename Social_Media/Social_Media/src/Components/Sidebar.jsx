import { Link } from "react-router-dom";
import "../routes/App";

const Sidebar = ({ selectedTab, setSelectedTab }) => {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark mysidebar"
        style={{ width: "200px" }}>
        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            <Link to ="/" className="nav-link text-white" aria-current="page">
              Home
            </Link>
          </li>
          <li>
            <Link to="/create-post" className="nav-link text-white">
              Create Post
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
