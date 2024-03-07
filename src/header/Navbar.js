import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [hide, sethide] = useState(false);
  const navmenu = () => {
    sethide(!hide);
  };
  const closemenuclick = () => {
    sethide(!true);
  };
  return (
    <>
      <nav className="sticky-top">
        <div className="ourpright  container-fluid ">
          <nav className="navbar ourpright px-5 navbar-expand-lg  ">
            <h1>PORTFOLIO</h1>

            <button
              className="navbar-toggler "
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={navmenu}
            >
              {hide ? <IoCloseSharp /> : <TiThMenu />}
            </button>
            <div
              className={
                hide
                  ? "collapse navbar-collapse d-flex justify-content-center "
                  : "collapse navbar-collapse justify-content-end  "
              }
              id="navbarNav"
            >
              <ul className="navbar-nav ourpright text-black">
                <li className="nav-item active text-color  " exact={true}>
                  <NavLink
                    onClick={closemenuclick}
                    exact={true}
                    className="nav-link text-black "
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    onClick={closemenuclick}
                    className="nav-link text-black"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item text-black">
                  <NavLink
                    onClick={closemenuclick}
                    className="nav-link text-black"
                    to="/skill"
                  >
                    Skill
                  </NavLink>
                </li>
                <li className="nav-item text-">
                  <NavLink
                    onClick={closemenuclick}
                    className="nav-link text-black "
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
