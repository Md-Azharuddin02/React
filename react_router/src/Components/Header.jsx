import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({isActive}) => `nav-link ${isActive ? "active" : "" }`}
              aria-current="page"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/feature"
              className={({isActive}) => `nav-link ${isActive ? "active" : ""}`}
            >
              Features
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/pricing"
              className={({isActive}) => `nav-link ${isActive ? "active" : ""}`}
            >
              Pricing
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact-us"
              className={({isActive}) => `nav-link ${isActive ? "active" : ""}`}
            >
              Contact Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/login"
              className={({isActive}) => `nav-link ${isActive ? "active" : " "}`}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
}
export default Header;
