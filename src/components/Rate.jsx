import React, { useContext } from "react";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { UserContext } from "../context/UserContext";
import Swal from "sweetalert2";

function Rate() {
  const { user } = useContext(UserContext);

  function handleRateSubmit(event) {
    const userRef = doc(db, "users", user.uid);
    const rate = document.getElementById("rate-input");
    event.preventDefault();

    if (rate.value.length >= 1) {
      setDoc(userRef, { rate: rate.value }, { merge: true });
      Swal.fire({
        text: "Your rate has been set, this can be changed at any time",
        icon: "success",
        confirmButtonColor: "#3f3d55",
      });
    } else
      Swal.fire({
        text: "Please enter a valid rate",
        icon: "warning",
        confirmButtonColor: "#3f3d55",
      });
  }

  const style = {
    container:
      "fixed flex flex-col items-center left-0 bottom-0 p-3 bg-accentBlue w-full",
    h1: "text-center font-semibold text-white md:text-lg",
    input:
      "rounded-md mt-3 p-1.5 text-sm text-center w-full max-w-[400px] mx-auto md:text-lg",
    button:
      "border mt-3 p-1.5 rounded-md bg-accentBlue text-white w-full max-w-[400px] mx-auto md:text-lg",
  };

  return (
    <div className={style.container}>
      <h1 className={style.h1}>
        It looks like we don't have an hourly rate for your account yet.
      </h1>
      <input
        id='rate-input'
        type='number'
        placeholder='Please enter your rate'
        className={style.input}
      />
      <button type='submit' onClick={handleRateSubmit} className={style.button}>
        Confirm
      </button>
    </div>
  );
}

export default Rate;
