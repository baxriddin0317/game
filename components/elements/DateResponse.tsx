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

  const relativeLabel = getRelativeDateLabel(date);
  
  if (relativeLabel) {
    // Show colored badge for relative dates
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
    // Show regular date in time tag
    return (
      <time dateTime={date} className="text-xs font-bold">
        {date}
      </time>
    );
  }
}

export default DateResponse