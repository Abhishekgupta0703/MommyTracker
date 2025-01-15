import React, { useState } from "react";
import { calculateDueDate, getTrimester, getMonthAndWeek } from "../utils/calculations";
import ResultContainer from "./ResultContainer";

function LMPToDueDate() {
  const [lmp, setLmp] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    if (lmp) {
      const dueDate = calculateDueDate(lmp);
      const trimester = getTrimester(new Date(lmp));
      const { month, week } = getMonthAndWeek(new Date(lmp));
      setResult({ dueDate, trimester, month, week });
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-pink-600 mb-4">LMP to Due Date</h2>
      <form onSubmit={handleCalculate} >
        <input
          type="date"
          value={lmp}
          onChange={(e) => setLmp(e.target.value)}
          className="border-2 border-pink-300 p-2 rounded-lg w-full mb-4"
        />
        <button type="submit"

          className="bg-pink-500 text-white px-4 py-2 rounded-lg w-full"
        >
          Calculate
        </button></form>
      <ResultContainer result={result} exclude={["lmp"]} />

    </div>
  );
}

export default LMPToDueDate;
