import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { dropDownData } from "../../utils/ButtonData";

import DropdownButton from "../../components/DropdownButton";

function CreateShift() {
  const { setShifts } = useContext(UserContext);
  const [inputForm, setInputForm] = useState([]);

  return (
    <div className='absolute h-[700px] w-full top-0 left-0 p-5'>
      <form className='h-full w-full bg-white rounded-lg p-5'>
        <h1>Create Shift</h1>

        <div className='flex flex-col gap-3 pt-5'>
          <DropdownButton
            inputForm={inputForm}
            setInputForm={setInputForm}
            dataObject={dropDownData.days}
            query={"Day"}
            id={"days-menu-container"}
          />
          <DropdownButton
            inputForm={inputForm}
            setInputForm={setInputForm}
            dataObject={dropDownData.dates}
            query={"Date"}
            id={"dates-menu-container"}
          />
          <DropdownButton
            inputForm={inputForm}
            setInputForm={setInputForm}
            dataObject={dropDownData.months}
            query={"Month"}
            id={"months-menu-container"}
          />
        </div>
      </form>
    </div>
  );
}

export default CreateShift;
