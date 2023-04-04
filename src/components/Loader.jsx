import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

function Loader() {
  return (
    <div className='absolute flex flex-col items-center justify-center w-full top-[45%]'>
      <ClipLoader
        color='black'
        size={40}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </div>
  );
}

export default Loader;
