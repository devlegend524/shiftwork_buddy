import React from "react";

function HamburgerToggle({ hamburgerRef, Link }) {
  const style = {
    hamNav:
      "hidden flex justify-between px-3 py-5 transition-all bg-primaryBlue text-white md:hidden",
    hamLi: "flex items-center gap-2 md:pl-5",
    HamburgerlinkImage: "w-5",
    hamLink: "lg:text-xl hover:cursor-pointer",
  };

  return (
    <ul ref={hamburgerRef} className={style.hamNav}>
      <li className={style.hamLi}>
        <img
          src='/icons/Hamburger-clock-icon.svg'
          alt='shifts'
          className={style.HamburgerlinkImage}
        />
        <Link to={"/"} className={style.hamLink}>
          Shifts
        </Link>
      </li>
      <li className={style.hamLi}>
        <img
          src='/icons/Hamburger-settings-icon.svg'
          alt='account'
          className={style.HamburgerlinkImage}
        />
        <Link to={"/account"} className={style.hamLink}>
          Account
        </Link>
      </li>
      <li className={style.hamLi}>
        <img
          src='/icons/Hamburger-logout-icon.svg'
          alt='logout'
          className={style.HamburgerlinkImage}
        />
        <span className={style.hamLink}>Logout</span>
      </li>
    </ul>
  );
}

export default HamburgerToggle;
