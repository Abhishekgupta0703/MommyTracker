export const calculateDueDate = (lmp) => {
    const date = new Date(lmp);
    date.setDate(date.getDate() + 280);
    return date.toISOString().split("T")[0];
  };
  
  export const calculateLMP = (dueDate) => {
    const date = new Date(dueDate);
    date.setDate(date.getDate() - 280);
    return date.toISOString().split("T")[0];
  };
  
  export const getTrimester = (lmp) => {
    const now = new Date();
    const weeks = Math.floor((now - new Date(lmp)) / (7 * 24 * 60 * 60 * 1000));
  
    if (weeks <= 12) return "First Trimester";
    if (weeks <= 26) return "Second Trimester";
    return "Third Trimester";
  };
  
  export const getMonthAndWeek = (lmp) => {
    const now = new Date();
    const weeks = Math.floor((now - lmp) / (7 * 24 * 60 * 60 * 1000));
    const month = Math.ceil(weeks / 4);
    return { month, week: weeks };
  };
  