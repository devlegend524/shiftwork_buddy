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
    navMenu: "hidden justify-between md:px-5 md:py-5 md:flex",
    hamburger: "relative w-9 hover:cursor-pointer md:hidden",
    containerRight: "flex items-center gap-5",
    heading: "text-2xl font-semibold md:text-3xl lg:text-4xl",
    user: "w-9 rounded-full hover:cursor-pointer lg:w-12",
    li: "hidden items-center gap-2 md:pl-5 md:flex",
    linkImage: "w-5",
    link: "lg:text-lg hover:cursor-pointer",
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
              <img
                src='/icons/clock-icon.svg'
                alt='shifts'
                className={style.linkImage}
              />
              <Link to={"/"} className={style.link}>
                Shifts
              </Link>
            </li>
            <li className={style.li}>
              <img
                src='/icons/settings-icon.svg'
                alt='account'
                className={style.linkImage}
              />
              <Link to={"/account"} className={style.link}>
                Account
              </Link>
            </li>
            <li className={style.li}>
              <img
                src='/icons/logout-icon.svg'
                alt='logout'
                className={style.linkImage}
              />
              <span className={style.link} onClick={logoutUser}>
                Logout
              </span>
            </li>
          </ul>
          <img src={user.image} alt='user' className={style.user} />
        </div>
      </div>

      <HamburgerToggle
        hamburgerRef={hamburgerRef}
        Link={Link}
        logoutUser={logoutUser}
      />
    </nav>
  );
}

export default Navbar;
