import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const getMonthName = (month: number) => {
  return month == 1
    ? 'Jan'
    : month == 2
    ? 'Fev'
    : month == 3
    ? 'Mar'
    : month == 4
    ? 'Avr'
    : month == 5
    ? 'Mai'
    : month == 6
    ? 'Jui'
    : month == 7
    ? 'Juil'
    : month == 8
    ? 'Aou'
    : month == 9
    ? 'Sep'
    : month == 10
    ? 'Oct'
    : month == 11
    ? 'Nov'
    : month == 12 && 'Dec'
}
