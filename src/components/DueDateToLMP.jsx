import React, { useState } from "react";
import { calculateLMP, getTrimester, getMonthAndWeek } from "../utils/calculations";
import ResultContainer from "./ResultContainer";

function DueDateToLMP() {
  const [dueDate, setDueDate] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    if (dueDate) {
      const lmp = calculateLMP(dueDate);
      const trimester = getTrimester(new Date(lmp));
      const { month, week } = getMonthAndWeek(new Date(lmp));
      setResult({ lmp, trimester, month, week });
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-pink-600 mb-4">Due Date to LMP</h2>
      <form onSubmit={handleCalculate}>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="border-2 border-pink-300 p-2 rounded-lg w-full mb-4"
      />
      <button
        type="submit"
        className="bg-pink-500 text-white px-4 py-2 rounded-lg w-full"
      >
        Calculate
      </button></form>
      <ResultContainer result={result} exclude={["dueDate"]} />

    </div>
  );
}

export default DueDateToLMP;
