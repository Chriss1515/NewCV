import { Link } from "react-router-dom";
import React from "react";

const Navigation = () => {
  return (
    <>
      <div className="nav-content">
        <li className="nav__list">
          <Link to="/profil">Profil</Link>
        </li>
        <li className="nav__list">
          <Link to="/skills">Skills</Link>
        </li>
        <li className="nav__list">
          <Link to="/Other">Experience</Link>
        </li>
      </div>
    </>
  );
};
export default Navigation;
