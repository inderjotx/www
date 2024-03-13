import { type ClassValue, clsx } from "clsx"
import Parser from 'rss-parser'
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



export function parseHour(dateStr: string): string {
  const dateObj = new Date(dateStr);
  const currentDate = new Date();

  // Calculate the difference between current date/time and the provided date/time in milliseconds
  const timeDifference = currentDate.getTime() - dateObj.getTime();
  const oneDay = 24 * 60 * 60 * 1000;

  // If the provided date is today
  if (currentDate.toDateString() === dateObj.toDateString()) {

    const minutes = currentDate.getMinutes() - dateObj.getMinutes()
    return (minutes > 1) ? `${minutes} mins ago` : `${minutes} min ago`;
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



export function parseDate(dateStr: string): string {
  const dateObj = new Date(dateStr);
  const currentDate = new Date();

  // not same year
  if (currentDate.getFullYear() !== dateObj.getFullYear()) {
    const diff = currentDate.getFullYear() - dateObj.getFullYear()
    return ` ${diff} year${(diff > 1) ? 's' : ""} ago`
  }


  // not same month
  else if (currentDate.getMonth() !== dateObj.getMonth()) {
    const diff = currentDate.getMonth() - dateObj.getMonth()
    return ` ${diff} month${(diff > 1) ? 's' : ""} ago`
  }


  // not same day 
  else if (currentDate.getDate() !== dateObj.getDate()) {
    const diff = currentDate.getDate() - dateObj.getDate()
    return ` ${diff} day${(diff > 1) ? 's' : ""} ago`
  }


  // not same hour
  else if (currentDate.getHours() !== dateObj.getHours()) {
    const diff = currentDate.getHours() - dateObj.getHours()
    return ` ${diff} hour${(diff > 1) ? 's' : ""} ago`
  }


  // some hours 
  else {
    return parseHour(dateStr)
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



export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init)
  return res.json()
}


export function formatGraphTimeData(data: BarGraphInput) {

  return data.map((val) => {

    const formattedTime = convertSecondsToTimestamp(val.timeSlotStart)
    val.timeSlotStart = formattedTime

    return val
  })


}



function convertSecondsToTimestamp(miliSeconds: number) {

  let date = new Date(miliSeconds);

  let month = date.toLocaleString('en-us', { month: 'short' });
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  let formattedTimestamp = month + ' ' + (day < 10 ? '0' : '') + day + ', ' + (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes;

  return formattedTimestamp;
}