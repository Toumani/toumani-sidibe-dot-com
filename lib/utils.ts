import { DateJSON } from "./types";

export const uppercaseFirst = (word: string): string => {
	if (word.length == 0)
		return ''
	return word[0].toUpperCase() + word.substring(1)
}

/**
 * Provides the English equivalent name of a month given its 0-based index
 * @param month
 */
export const monthToEnglish = (month: number): string => {
	switch (month) {
		case 0: return 'January';
		case 1: return 'February';
		case 2: return 'March';
		case 3: return 'April';
		case 4: return 'May';
		case 5: return 'June';
		case 6: return 'July';
		case 7: return 'August';
		case 8: return 'September'
		case 9: return 'October';
		case 10: return 'November';
		case 11: return 'December'
		default: return 'January';
	}
}

/**
 * Default date formatter to format MMM/YYYY e.g. July 2015 or January 2020
 * @param date input date
 * @return formatted date string
 */
export const formatDate = (date: Date): string => {
	return monthToEnglish(date.getMonth()) + ' ' + date.getFullYear();
}

export const formatToPeriod = (startDate: DateJSON, endDate?: DateJSON | null) => {
	return `${startDate.year}${!endDate ? ' — Present' : startDate.year === endDate.year ? "" : ` — ${endDate.year}`}`
}

const displayJSONDate = (date: DateJSON) => {
	return `${date.month < 10 ? "0" : ""}${date.month}/${date.year}`
}

export const formatToMonthlyPeriod = (startDate: DateJSON, endDate?: DateJSON | null) => {
	return `${displayJSONDate(startDate)} — ${!endDate ? 'Present' : displayJSONDate(endDate)}`
}