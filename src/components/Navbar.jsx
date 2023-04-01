import React, { useContext, useRef } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

import HamburgerToggle from "./HamburgerToggle";

function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const hamburgerRef = useRef(null);

  function toggleHamburger() {
    hamburgerRef.current.classList.toggle("hidden");
  }

  function logoutUser() {
    setUser(null);
  }

  const style = {
    nav: "bg-white w-full",
    navInnerContainer:
      "relative flex items-center justify-between px-5 py-5 lg:max-w-[90rem] lg:mx-auto",
    navMenu: "hidden md:px-5 md:py-5 md:flex",
    hamburger: "relative w-9 hover:cursor-pointer md:hidden",
    containerRight: "flex items-center gap-2",
    heading: "text-2xl font-semibold md:text-3xl lg:text-4xl",
    user: "w-12 rounded-full hover:cursor-pointer",
    li: "hidden items-center gap-2 md:flex",
    link: "ml-3 p-1 hover:text-[#6d66fa] hover:cursor-pointer",
  };

  return (
    <nav className={style.nav}>
      <div className={style.navInnerContainer}>
        <img
          src='/icons/hamburger-icon.svg'
          alt='menu toggle'
          className={style.hamburger}
          onClick={toggleHamburger}
        />
        <h1 className={style.heading}>Shiftwork Buddy</h1>

        <div className={style.containerRight}>
          <ul className={style.navMenu}>
            <li className={style.li}>
              <Link className={style.link} to={"/"}>
                Home
              </Link>
            </li>
            <li className={style.li}>
              <Link className={style.link} to={"/shifts"}>
                Shifts
              </Link>
            </li>
            <li className={style.li}>
              <span className={style.link} onClick={logoutUser}>
                Logout
              </span>
            </li>
          </ul>
          <img
            src={user.image}
            alt='user'
            className={style.user}
            onClick={logoutUser}
          />
        </div>
      </div>

      <HamburgerToggle
        hamburgerRef={hamburgerRef}
        logoutUser={logoutUser}
        toggleHamburger={toggleHamburger}
      />
    </nav>
  );
}

export default Navbar;
