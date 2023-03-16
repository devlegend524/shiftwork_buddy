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

  function showEditButtons(index) {
    const list = document.getElementById(`ul-${index}`);
    const editHTML = document.createElement("div");
    editHTML.id = "edit";

    const divStyles = `flex justify-end gap-5 pt-5`;
    editHTML.classList = divStyles;

    editHTML.innerHTML = `<button id='edit-shift' class='border p-1 rounded-md bg-accentBlue text-white w-[125px]'>Edit Shift</button>
      <button id='delete-shift' class='border p-1 rounded-md bg-red-500 text-white w-[125px]'>Delete Shift</button>`;

    document.getElementById("edit")
      ? document.getElementById("edit").remove()
      : list.insertAdjacentElement("afterend", editHTML);
  }

  const style = {
    container: "relative p-5 h-full",
    innerContainer: "mx-auto lg:max-w-[75rem]",
    topContainer: "flex items-center justify-between mt-5",
    heading: "text-xl font-semibold",
    createShift: "w-32 p-1.5 text-base text-white rounded-md bg-primaryBlue",
    ul: "mt-10",
    li: "flex items-center justify-between p-5 bg-white rounded-lg mt-5 h-14",
    span: "text-sm md:text-base w-1/2 text-left ml-12",
    checkbox: "w-5 h-5 md:w-10 md:h-10",
    editIcon: "w-4 md:w-5 hover:cursor-pointer",
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
              <li className={style.li} key={index} id={`ul-${index}`}>
                <input type='checkbox' className={style.checkbox} />
                <span className={style.span}>
                  {shift.day} {shift.date} {shift.month}
                </span>
                <span className={style.span}>
                  {shift.start} - {shift.finish}
                </span>
                <img
                  id={index}
                  src='/icons/edit-icon.svg'
                  alt='edit icon'
                  className={style.editIcon}
                  onClick={() => showEditButtons(index)}
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
