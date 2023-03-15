import React, { useContext, useRef } from "react";
import { UserContext } from "../../context/UserContext";
import CreateShift from "./CreateShift";

function Shifts() {
  const { user, shifts } = useContext(UserContext);
  const createShiftRef = useRef();

  const style = {
    container: "relative p-5",
    innerContainer: "mx-auto lg:max-w-[75rem]",
    topContainer: "flex items-center justify-between mt-5",
    heading: "text-lg font-semibold",
    createShift: "w-32 p-1.5 text-sm text-white rounded-md bg-primaryBlue",
    ul: "mt-10",
    li: "flex items-center justify-between p-3 bg-white rounded-lg",
    checkbox: "w-4 h-4",
    span: "text-sm",
    editIcon: "w-4",
  };

  return (
    <div className={style.container}>
      <div className={style.innerContainer}>
        <div className={style.topContainer}>
          <h2 className={style.heading}>Current Shifts</h2>
          <button ref={createShiftRef} className={style.createShift}>
            Create Shift
          </button>
        </div>

        <ul className={style.ul}>
          <li className={style.li}>
            <input type='checkbox' className={style.checkbox} />
            <span className={style.span}>Sun 12th December</span>
            <span className={style.span}>2:45pm - 11pm</span>
            <img
              src='/icons/edit-icon.svg'
              alt='edit icon'
              className={style.editIcon}
            />
          </li>
        </ul>
      </div>

      <CreateShift createShiftRef={createShiftRef} />
    </div>
  );
}

export default Shifts;
