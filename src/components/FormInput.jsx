import React from "react";
import Swal from "sweetalert2";

function FormInput({ id, placeHolder, inputForm, setInputForm }) {
  function validateTime(inputTime) {
    const regex = new RegExp(/^([01][0-9]|2[0-3])([0-5][0-9])$/);
    if (regex.test(inputTime.value.toString()) === true) {
      return true;
    } else return false;
  }

  function validateInputLength(event) {
    if (event.target.value.length > 4) {
      event.target.value = event.target.value.slice(0, 4);
    }
  }

  function handleConfirm(event) {
    const inputId = event.target.id.split("-")[0];
    const button = document.getElementById(event.target.id);
    const input = document.getElementById(inputId);

    if (validateTime(input) === true) {
      button.innerHTML = "Confirmed";
      button.classList.remove("bg-[#6d66fa]");
      button.classList.add("bg-green-300");
      input.classList.remove("border-red-400");

      setInputForm({ ...inputForm, [inputId]: input.value });
    } else {
      button.innerHTML = "Validate";
      button.classList.remove("bg-green-300");
      button.classList.add("bg-[#6d66fa]");
      input.classList.add("border-red-400");

      Swal.fire({
        text: `Your ${inputId} time seems to be incorrect`,
        icon: "warning",
        confirmButtonColor: "#6d66fa",
      });
    }
  }

  const style = {
    container: "flex flex-col pt-5 gap-4",
    inputContainer: "flex justify-between",
    inputText:
      "border p-3 rounded-lg text-accentBlue italic text-sm font-semibold w-2/3",
    inputSpan:
      "p-3 rounded-lg text-white bg-accentBlue text-sm w-[100px] text-center hover:cursor-pointer",
  };

  return (
    <div className={style.container}>
      <div className={style.inputContainer}>
        <input
          id={id}
          type='number'
          placeholder={placeHolder}
          className={style.inputText}
          onChange={validateInputLength}
        />
        <span
          id={`${id}-submit`}
          className={style.inputSpan}
          onClick={handleConfirm}
        >
          Validate
        </span>
      </div>
    </div>
  );
}

export default FormInput;
