import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Navbar() {
  const { user, setUser, hamburger, setHamburger } = useContext(UserContext);

  const style = {
    nav: "bg-white w-full",
    navInnerContainer:
      "relative flex items-center justify-between px-5 py-5 lg:max-w-[90rem] lg:mx-auto",
    navMenu:
      "absolute w-full flex justify-between px-3 py-5 bg-primaryBlue text-white transition-all left-[-100%] top-full md:relative md:w-auto md:z-auto md:text-black md:bg-white md:transition-none",
    containerRight: "flex items-center gap-5",
    hamburger: "relative w-9 hover:cursor-pointer md:hidden",
    heading: "text-2xl font-semibold md:text-3xl lg:text-4xl",
    user: "w-9 rounded-full hover:cursor-pointer lg:w-12",
    li: "flex items-center gap-2 md:pl-5",
    HamburgerlinkImage: "hidden w-5 md:block",
    linkImage: "w-5 md:hidden",
    link: "lg:text-xl hover:cursor-pointer",
  };

  return (
    <nav className={style.nav}>
      <div className={style.navInnerContainer}>
        <img
          src='/icons/hamburger-icon.svg'
          alt='menu toggle'
          className={style.hamburger}
          onClick={() => {
            const navMenu = document.getElementById("nav-menu");
            if (!hamburger) {
              navMenu.classList.add("nav-menu-active");
              setHamburger(true);
            } else {
              navMenu.classList.remove("nav-menu-active");
              setHamburger(false);
            }
          }}
        />
        <h1 className={style.heading}>Shiftwork Buddy</h1>

        <div className={style.containerRight}>
          <ul id='nav-menu' className={style.navMenu}>
            <li className={style.li}>
              <img
                src='/icons/Hamburger-clock-icon.svg'
                alt='shifts'
                className={style.HamburgerlinkImage}
              />
              <img
                src='/icons/clock-icon.svg'
                alt='shifts'
                className={style.linkImage}
              />
              <span className={style.link}>Shifts</span>
            </li>
            <li className={style.li}>
              <img
                src='/icons/Hamburger-settings-icon.svg'
                alt='account'
                className={style.HamburgerlinkImage}
              />
              <img
                src='/icons/settings-icon.svg'
                alt='account'
                className={style.linkImage}
              />
              <span className={style.link}>Account</span>
            </li>
            <li className={style.li}>
              <img
                src='/icons/Hamburger-logout-icon.svg'
                alt='logout'
                className={style.HamburgerlinkImage}
              />
              <img
                src='/icons/logout-icon.svg'
                alt='logout'
                className={style.linkImage}
              />
              <span className={style.link}>Logout</span>
            </li>
          </ul>

          <img
            src={user.image}
            alt='user'
            className={style.user}
            onClick={() => {
              setUser(null);
            }}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
