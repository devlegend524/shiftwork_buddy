import React, { useContext, useEffect, useRef } from "react";
import { db } from "../../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { UserContext } from "../../context/UserContext";
import CreateShift from "./CreateShift";

function Shifts() {
  const { user, shifts, setShifts } = useContext(UserContext);
  const createShiftRef = useRef();

  useEffect(() => {
    onSnapshot(collection(db, `users/${user.uid}/shifts`), (snapshot) =>
      setShifts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  const style = {
    container: "relative p-5",
    innerContainer: "mx-auto lg:max-w-[75rem]",
    topContainer: "flex items-center justify-between mt-5",
    heading: "text-xl font-semibold",
    createShift: "w-32 p-1.5 text-base text-white rounded-md bg-primaryBlue",
    ul: "mt-10",
    li: "flex items-center justify-between p-5 bg-white rounded-lg mt-5 h-14",
    span: "text-sm md:text-base w-full text-left ml-12",
    checkbox: "w-5 h-5 md:w-10 md:h-10",
    editIcon: "w-4 md:w-5",
  };

  return (
    <div className={style.container}>
      <div className={style.innerContainer}>
        <div className={style.topContainer}>
          <h2 className={style.heading}>
            {shifts.length > 0
              ? "Current Shifts"
              : "You have no current shifts"}
          </h2>
          <button ref={createShiftRef} className={style.createShift}>
            Create Shift
          </button>
        </div>

        <ul className={style.ul}>
          {shifts.map((shift, index) => {
            return (
              <li className={style.li} key={index}>
                <input type='checkbox' className={style.checkbox} />
                <span className={style.span}>
                  {shift.day} {shift.date} {shift.month}
                </span>
                <span className={style.span}>
                  {shift.start} - {shift.finish}
                </span>
                <img
                  src='/icons/edit-icon.svg'
                  alt='edit icon'
                  className={style.editIcon}
                />
              </li>
            );
          })}
        </ul>
      </div>

      <CreateShift createShiftRef={createShiftRef} />
    </div>
  );
}

export default Shifts;
