import { parseISO, format } from 'date-fns';

export default function FormattedDate({ dateString }: { dateString: string }) {
	const date = parseISO(dateString)
	return <time className="pl-4 text-zinc-500 font-italic border-l-4 border-l-zinc-500 border-solid" dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}