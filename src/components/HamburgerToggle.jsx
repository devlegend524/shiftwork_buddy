import React from "react";
import { Link } from "react-router-dom";

function HamburgerToggle({ hamburgerRef, logoutUser, toggleHamburger }) {
  const style = {
    hamNav:
      "hidden flex justify-between px-5 py-5 transition-all bg-primaryBlue text-white md:hidden",
    hamLi: "flex items-center gap-2",
    hamLink: "hover:cursor-pointer",
  };

  return (
    <ul ref={hamburgerRef} className={style.hamNav}>
      <li className={style.hamLi}>
        <Link className={style.hamLink} to={"/"} onClick={toggleHamburger}>
          Home
        </Link>
      </li>
      <li className={style.hamLi}>
        <Link
          className={style.hamLink}
          to={"/shifts"}
          onClick={toggleHamburger}
        >
          Shifts
        </Link>
      </li>
      <li className={style.hamLi} onClick={toggleHamburger}>
        <span className={style.hamLink} onClick={logoutUser}>
          Logout
        </span>
      </li>
    </ul>
  );
}

export default HamburgerToggle;
