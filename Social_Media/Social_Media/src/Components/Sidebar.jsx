import "../routes/App";

const Sidebar = ({ selectedTab, setSelectedTab }) => {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark mysidebar"
        style={{ width: "200px" }}>
        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            <a href="/" className="nav-link text-white" aria-current="page">
              Home
            </a>
          </li>
          <li>
            <a href="/create-post" className="nav-link text-white">
              Create Post
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
