import React from "react";
import { Link } from "react-router-dom";

function HamburgerToggle({ hamburgerRef, logoutUser }) {
  const style = {
    hamNav:
      "hidden flex justify-between px-5 py-5 transition-all bg-primaryBlue text-white md:hidden",
    hamLi: "flex items-center gap-2",
    hamLink: "hover:cursor-pointer",
  };

  return (
    <ul ref={hamburgerRef} className={style.hamNav}>
      <li className={style.hamLi}>
        <Link className={style.hamLink} to={"/"}>
          Home
        </Link>
      </li>
      <li className={style.hamLi}>
        <Link className={style.hamLink} to={"/shifts"}>
          Shifts
        </Link>
      </li>
      <li className={style.hamLi}>
        <span className={style.hamLink} onClick={logoutUser}>
          Logout
        </span>
      </li>
    </ul>
  );
}

export default HamburgerToggle;
