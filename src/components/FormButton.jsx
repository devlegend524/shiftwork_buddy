import React, { useRef } from "react";

function DropdownButton({ dataObject, query, id, inputForm, setInputForm }) {
  const containerRef = useRef(id);

  function toggleDropDown() {
    containerRef.current.classList.toggle("hidden");
  }

  function closeDropDown() {
    setTimeout(() => {
      containerRef.current.classList.add("hidden");
    }, 10);
  }

  function handleOption(value) {
    setInputForm({ ...inputForm, [query]: value });
  }

  function capitalizeWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  function displaySelectedValue() {
    if (query === "day") {
      return inputForm.day;
    } else if (query === "date") {
      return inputForm.date;
    } else {
      return inputForm.month;
    }
  }

  const style = {
    dropdownButton:
      "flex items-center justify-between w-full h-[50px] rounded-md bg-white px-3 py-2 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
    menuContainer:
      "hidden absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
    selectedValue: "italic text-accentBlue text-sm",
    menuInner: "max-h-[400px] py-1 overflow-y-scroll",
    selectItem:
      "text-gray-700 block px-4 py-2 transition-all hover:cursor-pointer hover:bg-accentBlue hover:text-white",
  };

  return (
    <div>
      <div>
        <button
          id='dropdown-button'
          type='button'
          className={style.dropdownButton}
          onBlur={closeDropDown}
          onClick={toggleDropDown}
        >
          Select {capitalizeWord(query)}:
          <p className={style.selectedValue}>{displaySelectedValue()}</p>
        </button>
      </div>

      <div
        ref={containerRef}
        className={style.menuContainer}
        role='menu'
        aria-orientation='vertical'
        aria-labelledby='menu-button'
        tabIndex='-1'
      >
        <div className={style.menuInner} role='none'>
          {dataObject.map((query, index) => {
            return (
              <span
                id='menu-item'
                key={index}
                className={style.selectItem}
                role='menuitem'
                tabIndex='-1'
                onClick={() => handleOption(query)}
              >
                {query}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DropdownButton;
