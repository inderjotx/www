import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function formatNumber(value: number) {
  const strVal = value.toString()
  if (strVal.length > 1) {
    return strVal
  }
  else {
    return '0' + strVal
  }
}



export function parseDate(dateStr: string): string {
  const dateObj = new Date(dateStr);
  const currentDate = new Date();

  // Calculate the difference between current date/time and the provided date/time in milliseconds
  const timeDifference = currentDate.getTime() - dateObj.getTime();
  const oneDay = 24 * 60 * 60 * 1000;

  // If the provided date is today
  if (currentDate.toDateString() === dateObj.toDateString()) {
    return "Today";
  }
  // If the provided date is yesterday
  else if (currentDate.getDate() - dateObj.getDate() === 1) {
    return "Yesterday";
  }
  // If the provided date is more than 1 day ago
  else {
    const daysAgo = Math.round(timeDifference / oneDay);
    return `${daysAgo} day${daysAgo > 1 ? 's' : ''} ago`;
  }
}



export function getTime() {
  const date = new Date()
  return {
    hours: formatNumber(date.getHours()),
    minutes: formatNumber(date.getMinutes()),
    isDay: date.getHours() < 12
  }
}