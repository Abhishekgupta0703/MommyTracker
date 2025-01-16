import React from "react";

function ResultContainer({ result, exclude }) {
  const renderBox = (label, data) => (
    <div className="p-3 bg-pink-200 rounded-md flex flex-col items-center text-center">
      <p className="text-gray-700">{label}</p>
      <p className="font-bold text-pink-700">{data || "N/A"}</p>
    </div>
  );
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  return (
    <div className="bg-pink-100 p-4 mt-4 rounded-lg shadow-lg">
      {result ? (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {!exclude.includes("dueDate") && renderBox("Due Date", formatDate(result.dueDate))}
          {!exclude.includes("lmp") && renderBox("Last Period Date", formatDate(result.lmp))}
          {renderBox("Trimester", result.trimester)}
          {renderBox("Current Month", result.month)}
          {renderBox("Current Week", result.week)}
        </div>
      ) : (
        <p className="text-gray-500 text-center">No data to display.</p>
      )}
    </div>
  );
}

export default ResultContainer;
