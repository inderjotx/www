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



export function parseDate(dateStr: string): string {
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



export function parseBookDate(dateStr: string): string {
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


  // same month or day 
  else {
    return parseDate(dateStr)
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



export function fetcher(url: string) {
  return fetch(url, { next: { revalidate: 0 } }).then(data => data.json())

}



export async function getRecentAnime() {

  const RSS_URL = 'https://letterboxd.com/inderjotx/rss/'
  const parser = new Parser()


  const feed = await parser.parseURL(RSS_URL)

  const data = feed.items?.[0].content


  if (data) {
    const link = getNameFromHTML(data)
    console.log(link)

    if (link) {
      const slug = getSlug(link)
      console.log(slug)
      return slug
    }

  }

}


// get first li and name inside the li and search it thougth letterbox d and get the data 

function getNameFromHTML(htmlString: string) {

  const firstItem = htmlString.split('</li>')[0].toString()
  const regex = /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/g;
  const match = regex.exec(firstItem);


  if (match) {
    const hrefValue = match[2];
    return hrefValue
  } else {
    console.log('No match found');
  }

}


function getSlug(link: string) {

  const arr = link.split('/')

  return arr[arr.length - 2];

}


