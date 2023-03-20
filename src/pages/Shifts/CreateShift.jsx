import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { dropDownData } from "../../utils/ButtonData";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import Swal from "sweetalert2";

function CreateShift({ createShiftRef }) {
  const { user } = useContext(UserContext);
  const [inputForm, setInputForm] = useState([]);

  function createRandomID() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  inputForm.id = createRandomID();
  inputForm.checked = false;

  const docRef = doc(db, "users", user.uid, "shifts", inputForm.id);

  document.addEventListener("click", (event) => {
    if (event.target === createShiftRef.current) {
      document.getElementById("shift-container").classList.remove("hidden");
    }
  });

  function handleStartFinish(key) {
    const inputValue = event.target.value.slice(0, 4);
    setInputForm({ ...inputForm, [key]: inputValue.toString() });
    event.target.value = inputValue;
  }

  function handleDropDown(key) {
    setInputForm({ ...inputForm, [key]: event.target.value });
  }

  function validateTime(startTime, finishTime) {
    const regex = new RegExp(/^([01][0-9]|2[0-3])([0-5][0-9])$/);
    if (regex.test(startTime) && regex.test(finishTime)) {
      return true;
    } else return false;
  }

  function resetInputs() {
    day.value = "Select Day:";
    date.value = "Select Date:";
    month.value = "Select Month:";
    start.value = "";
    finish.value = "";
  }

  function handleSubmit() {
    const start = document.getElementById("start");
    const finish = document.getElementById("finish");
    const day = document.getElementById("day");
    const date = document.getElementById("date");
    const month = document.getElementById("month");
    const container = document.getElementById("shift-container");

    if (
      inputForm.day &&
      inputForm.date &&
      inputForm.month &&
      validateTime(start.value, finish.value)
    ) {
      setDoc(docRef, inputForm);
      resetInputs();
      container.classList.add("hidden");
      Swal.fire({ text: "Your shift has been created!", icon: "success" });
    } else {
      Swal.fire({
        text: `Please fix your entry before submitting`,
        icon: "warning",
        confirmButtonColor: "#6d66fa",
      });
    }
  }

  const style = {
    container: "hidden absolute w-full h-full top-0 left-0 p-5",
    form: "flex flex-col gap-8 h-full w-full bg-white rounded-lg p-5 mx-auto lg:max-w-[75rem]",
    topDiv: "flex items-center justify-between my-5",
    h1: "font-semibold text-xl",
    image: "hover:cursor-pointer",
    selectContainer: "flex flex-col gap-5",
    dropdownButton:
      "w-full h-[50px] rounded-md bg-white px-3 py-2 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
    inputContainer: "flex flex-col gap-5 pt-10",
    input: "border p-3 rounded-lg text-accentBlue italic text-sm font-semibold",
    button:
      "border p-2 rounded-md bg-accentBlue text-white w-[150px] mt-10 mb-5",
  };

  return (
    <div id='shift-container' className={style.container}>
      <form className={style.form}>
        <div className={style.topDiv}>
          <h1 className={style.h1}>Create Shift</h1>
          <img
            src='/icons/close-icon.svg'
            alt='close menu'
            className={style.image}
            onClick={() => {
              document
                .getElementById("shift-container")
                .classList.add("hidden");
            }}
          />
        </div>

        <div className={style.selectContainer}>
          <select
            id='day'
            type='button'
            className={style.dropdownButton}
            onChange={() => handleDropDown(event.target.id)}
          >
            <option>Select Day:</option>
            {dropDownData.days.map((day, index) => {
              return (
                <option value={day} key={index}>
                  {day}
                </option>
              );
            })}
          </select>
          <select
            id='date'
            type='button'
            className={style.dropdownButton}
            onChange={() => handleDropDown(event.target.id)}
          >
            <option>Select Date:</option>
            {dropDownData.dates.map((date, index) => {
              return (
                <option value={date} key={index}>
                  {date}
                </option>
              );
            })}
          </select>
          <select
            id='month'
            type='button'
            className={style.dropdownButton}
            onChange={() => handleDropDown(event.target.id)}
          >
            <option>Select Month:</option>
            {dropDownData.months.map((month, index) => {
              return (
                <option value={month} key={index}>
                  {month}
                </option>
              );
            })}
          </select>
        </div>

        <div className={style.inputContainer}>
          <input
            id='start'
            type='number'
            className={style.input}
            placeholder='Start time: 1445'
            onChange={() => handleStartFinish(event.target.id)}
          />

          <input
            id='finish'
            type='number'
            className={style.input}
            placeholder='Finish time: 2300'
            onChange={() => handleStartFinish(event.target.id)}
          />
        </div>

        <button type='button' className={style.button} onClick={handleSubmit}>
          Submit Shift
        </button>
      </form>
    </div>
  );
}

export default CreateShift;
