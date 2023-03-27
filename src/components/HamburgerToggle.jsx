import React from "react";

function HamburgerToggle({ hamburgerRef, logoutUser }) {
  const style = {
    hamNav:
      "hidden flex justify-evenly px-3 py-5 transition-all bg-primaryBlue text-white md:hidden",
    hamLi: "flex items-center gap-2 md:pl-5",
    HamburgerlinkImage: "w-5",
    hamLink: "lg:text-xl hover:cursor-pointer",
  };

  return (
    <ul ref={hamburgerRef} className={style.hamNav}>
      <li className={style.hamLi}>
        <img
          src='/icons/Hamburger-logout-icon.svg'
          alt='logout'
          className={style.HamburgerlinkImage}
        />
        <span className={style.hamLink} onClick={logoutUser}>
          Logout
        </span>
      </li>
    </ul>
  );
}

export default HamburgerToggle;
