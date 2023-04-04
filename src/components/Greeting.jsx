import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const style = {
  container:
    "absolute flex flex-col items-center justify-center w-full top-[45%] p-5",
  h2: "text-2xl text-center font-semibold",
  lowerContainer: "text-center mt-5 md:text-lg",
  boldH: "text-[#6d66fa]",
  boldP: "text-[#3f3d55]",
  infoTag: "w-32 p-2 text-base text-white rounded-md bg-primaryBlue mt-5",
};

function Greeting() {
  const { user } = useContext(UserContext);
  const currentTime = new Date().toTimeString().slice(0, 8);

  return (
    <div className={style.container}>
      <h2 className={style.h2}>
        {currentTime < 12 ? "Good morning" : "Good afternoon"}
        <b className={style.boldH}> {user.name.split(" ")[0]}</b>, welcome to
        <b className={style.boldH}> Shiftwork Buddy</b>.
      </h2>

      <p className={style.lowerContainer}>
        Keeping track of your shifts so you know{" "}
        <b className={style.boldP}>WHEN</b> you're working and{" "}
        <b className={style.boldP}>HOW MUCH</b> you can expect to receive.
      </p>
    </div>
  );
}

export default Greeting;
