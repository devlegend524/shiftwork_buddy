import React, { useContext, useEffect, useRef } from "react";
import { db } from "../../../firebase";
import { monthKey } from "../../utils/ButtonData";
import {
  collection,
  onSnapshot,
  doc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import { UserContext } from "../../context/UserContext";
import Swal from "sweetalert2";

import Rate from "../../components/Rate";
import CreateShift from "./CreateShift";
import ShiftsSummary from "./ShiftsSummary";

function Shifts() {
  const { user, setUser, shifts, setShifts } = useContext(UserContext);
  const createShiftRef = useRef();

  useEffect(() => {
    const shiftColRef = collection(db, `users/${user.uid}/shifts`);
    const userRef = doc(db, "users", user.uid);

    onSnapshot(shiftColRef, (snapshot) =>
      setShifts(snapshot.docs.map((doc) => doc.data()))
    );
    onSnapshot(userRef, (snapshot) => {
      setUser(snapshot.data());
    });
  }, []);

  function deleteShift(passedShift) {
    const filtered = shifts.filter((shifts) => shifts.id === passedShift.id);
    const selectedShiftId = filtered[0].id;
    const docRef = doc(db, "users", user.uid, "shifts", selectedShiftId);

    Swal.fire({
      text: "Are you sure you want to delete this shift?",
      footer: `${passedShift.day} ${passedShift.date} ${passedShift.month}, ${passedShift.start}-${passedShift.finish}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      confirmButtonColor: "#3f3d55",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteDoc(docRef);
      } else null;
    });
  }

  function updateRate() {
    const userRef = doc(db, "users", user.uid);
    Swal.fire({
      text: "Enter a new rate",
      input: "number",
      confirmButtonColor: "#3f3d55",
      showCancelButton: true,
      footer: `Your current rate is ${user.rate}/hr`,
      inputValidator: (input) => {
        if (!input) {
          return "Please enter a valid rate";
        } else {
          setDoc(userRef, { rate: input }, { merge: true });
          Swal.fire({
            text: "Your rate has been updated",
            icon: "success",
          });
        }
      },
    });
  }

  async function setChecked(passedShift) {
    const filtered = shifts.filter((shifts) => shifts.id === passedShift.id);
    const selectedShiftId = filtered[0].id;
    const docRef = doc(db, "users", user.uid, "shifts", selectedShiftId);

    setDoc(docRef, { checked: !passedShift.checked }, { merge: true });
  }

  shifts.forEach((shift) => {
    const date = Number(shift.date.slice(0, -2));
    const month = monthKey[shift.month];
    const year = new Date().getFullYear();

    const convertedDate = `${month}/${date}/${year}`;
    shift.convertedDate = convertedDate;
  });

  function sortShifts(a, b) {
    const dateA = new Date(a.convertedDate);
    const dateB = new Date(b.convertedDate);

    if (dateA > dateB) return 1;
    else if (dateA < dateB) return -1;
    return 0;
  }

  shifts.sort(sortShifts);

  const style = {
    container: "relative p-5 h-full",
    innerContainer: "mx-auto lg:max-w-[75rem]",
    topContainer: "flex items-center justify-between mt-5",
    heading: "text-xl font-semibold",
    buttonContainer: "flex flex-col md:flex-row",
    createShift: "w-32 p-1 text-base text-white rounded-md bg-primaryBlue",
    updateRate:
      "w-32 p-1 text-base text-white rounded-md  mt-3 bg-primaryBlue md:ml-5 md:mt-0",
    ul: "mt-10",
    li: "flex items-center justify-between p-5 bg-white rounded-lg mt-5 md:flex-none",
    checkedShift:
      "flex items-center justify-between p-5 bg-gray-200 rounded-lg mt-5",
    span: "text-sm md:text-base w-1/2 text-left ml-12",
    checkbox: "w-5 h-5 accent-[#3f3d55]",
    editIcon: "w-5 hover:cursor-pointer mr-5",
    closeIcon: "w-6 hover:cursor-pointer",
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
          <div className={style.buttonContainer}>
            <button ref={createShiftRef} className={style.createShift}>
              Create Shift
            </button>
            {user.rate ? (
              <button className={style.updateRate} onClick={updateRate}>
                Update Rate
              </button>
            ) : null}
          </div>
        </div>

        <ul className={style.ul}>
          {shifts.map((shift, index) => {
            return (
              <li
                className={shift.checked ? style.checkedShift : style.li}
                key={index}
                id={`ul-${index}`}
              >
                <input
                  type='checkbox'
                  checked={shift.checked ? true : false}
                  className={style.checkbox}
                  onChange={() => setChecked(shift)}
                />
                <span className={style.span}>
                  {shift.day} {shift.date} {shift.month}
                </span>
                <span className={style.span}>
                  {shift.start} - {shift.finish}
                </span>
                <img
                  src='/icons/close-icon.svg'
                  alt='delete icon'
                  className={style.closeIcon}
                  onClick={() => deleteShift(shift)}
                />
              </li>
            );
          })}
        </ul>
      </div>

      <ShiftsSummary />
      <CreateShift createShiftRef={createShiftRef} />
    </div>
  );
}

export default Shifts;
