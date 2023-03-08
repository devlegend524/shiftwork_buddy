import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { dropDownData } from "../../utils/ButtonData";

import FormButton from "../../components/FormButton";
import FormInput from "../../components/FormInput";

function CreateShift() {
  const { setShifts } = useContext(UserContext);
  const [inputForm, setInputForm] = useState([]);

  return (
    <div className='absolute h-[700px] w-full top-0 left-0 p-5'>
      <form className='h-full w-full bg-white rounded-lg p-5'>
        <h1 className='font-semibold text-xl'>Create Shift</h1>

        <div className='flex flex-col gap-3 pt-5'>
          <FormButton
            inputForm={inputForm}
            setInputForm={setInputForm}
            dataObject={dropDownData.days}
            query={"day"}
            id={"days-menu-container"}
          />
          <FormButton
            inputForm={inputForm}
            setInputForm={setInputForm}
            dataObject={dropDownData.dates}
            query={"date"}
            id={"dates-menu-container"}
          />
          <FormButton
            inputForm={inputForm}
            setInputForm={setInputForm}
            dataObject={dropDownData.months}
            query={"month"}
            id={"months-menu-container"}
          />
        </div>

        <h2 className='font-semibold pt-5'>
          Enter your start and finish time:
        </h2>

        <FormInput
          id={"start"}
          placeHolder={"Start time: 1445"}
          inputForm={inputForm}
          setInputForm={setInputForm}
        />
        <FormInput
          id={"finish"}
          placeHolder={"Finish time: 2300"}
          inputForm={inputForm}
          setInputForm={setInputForm}
        />
      </form>
    </div>
  );
}

export default CreateShift;
