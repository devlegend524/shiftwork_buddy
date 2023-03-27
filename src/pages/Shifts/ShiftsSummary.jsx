import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import moment from "moment/moment";

function ShiftsSummary() {
  const { user, shifts } = useContext(UserContext);

  function calculateHours() {
    const hoursArray = [];
    shifts.forEach((shift) => {
      const startTime = moment(shift.start, "hh:mm");
      const finishTime = moment(shift.finish, "hh:mm");
      const hoursDiff = finishTime.diff(startTime, "hours");

      if (hoursDiff < 0) {
        hoursArray.push(startTime.diff(finishTime, "hours") - 7);
      } else {
        hoursArray.push(finishTime.diff(startTime, "hours") - 0.25);
      }
    });

    return hoursArray.length > 0
      ? hoursArray.reduce((prev, curr) => prev + curr)
      : null;
  }

  const grossIncome = calculateHours() * user.rate;
  const yearlyIncome = grossIncome * 26;

  function calculateTax() {
    const taxFree = 18000;
    const nineteenCents = Math.floor(
      (((yearlyIncome - taxFree) / 26) * 19) / 100
    );
    const bracketDifference = Math.floor((((45000 - 18201) / 26) * 19) / 100);
    const thirtyTwoCents = Math.floor(
      (((yearlyIncome - 45000) / 26) * 32.5) / 100
    );

    if (yearlyIncome < 18200) {
      return false;
    } else if (yearlyIncome >= 18201 && yearlyIncome <= 45000) {
      return nineteenCents;
    } else {
      return bracketDifference + thirtyTwoCents;
    }
  }

  calculateTax();

  const style = {
    container: "py-10 lg:max-w-[75rem] mx-auto",
    h1: "font-semibold text-lg border-b border-black pb-3",
    innerContainer: "pt-5",
    netPay: "font-semibold text-[#6d66fa]",
  };

  return shifts.length > 0 ? (
    <div className={style.container}>
      <h1 className={style.h1}>Payment Summary:</h1>
      <div className={style.innerContainer}>
        <p>Total hours: {calculateHours()}</p>
        <p>Gross pay: ${grossIncome}</p>
        <p>Tax paid: {calculateTax() ? `-$${calculateTax()}` : `-$${0}`}</p>
        <p className={style.netPay}>Net pay: ${grossIncome - calculateTax()}</p>
      </div>
    </div>
  ) : null;
}

export default ShiftsSummary;
