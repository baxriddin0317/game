import React from 'react'

interface props {
  date: string;
  color?: boolean;
}

const DateResponse = ({date, color=false}: props) => {
  const getRelativeDateLabel = (dateString: string) => {
    const today = new Date();
    const targetDate = new Date(dateString);
    
    // Reset time to compare only dates
    const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const targetDateOnly = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate());
    
    const diffTime = targetDateOnly.getTime() - todayDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
      return "Сегодня";
    } else if (diffDays === 1) {
      return "Завтра";
    } else if (diffDays === -1) {
      return "Вчера";
    } else {
      return null; // Return null for regular dates
    }
  };

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
  
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()).slice(-2);
  
    return `${day}.${month}.${year}`;
  }

  const relativeLabel = getRelativeDateLabel(date);
  
  if (relativeLabel) {
    let bgColor = "";
    if (relativeLabel === "Сегодня") {
      bgColor = "text-brand-green bg-white";
    } else if (relativeLabel === "Завтра") {
      bgColor = "text-brand-btn";
    } else if (relativeLabel === "Вчера") {
      bgColor = "";
    }
    
    return (
      <span className={`${bgColor} ${color ? '' : '!bg-transparent'} dark:bg-transparent px-2 py-1 rounded-full text-xs font-extrabold`}>
        {relativeLabel}
      </span>
    );
  } else {
    const formattedDate = formatDate(date)
    return (
      <time dateTime={date} className="text-xs font-bold">
        {formattedDate}
      </time>
    );
  }
}

export default DateResponse