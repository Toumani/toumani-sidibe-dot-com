import React from "react";
import { useCallback, useRef } from "react";
import { Key } from "./PlayWithMe";

export default function PianoRoll({ onKeyPressed }: { onKeyPressed: (key: Key) => void }) {
	const wholeKey: Key[] = [
		{ note: 'C' },
		{ note: 'D' },
		{ note: 'E' },
		{ note: 'F' },
		{ note: 'G' },
		{ note: 'A' },
		{ note: 'B' },
	];
	const interNotes = [
		{ note: 'C#' },
		{ note: 'D#' },
		{ note: null },
		{ note: 'F#' },
		{ note: 'G#' },
		{ note: 'Bb' },
	]
	const handleWholeKeyHover = (key: SVGRectElement) => { key.style.fill = '#ccc'; }
	const handleWholeKeyUnhover = (key: SVGRectElement) => { key.style.fill = '#fff'; }
	const handleInterKeyHover = (key: SVGRectElement) => { key.style.fill = '#333'; }
	const handleInterKeyUnhover = (key: SVGRectElement) => { key.style.fill = '#000'; }

	return (
		<svg viewBox="0 0 245 170" xmlns="http://www.w3.org/2000/svg" width="245pt" height="170pt">
			{ wholeKey.map((key, index) => {
				const keyRef = useRef<SVGRectElement>(null);
				const onMouseEnter = useCallback(() => {
					if (keyRef.current)
						handleWholeKeyHover(keyRef.current)
					onKeyPressed(key)
				}, [keyRef])
				const onMouseLeave = useCallback(() => {
					if (keyRef.current)
						handleWholeKeyUnhover(keyRef.current)
				}, [keyRef])
				return <rect
					ref={keyRef}
					key={key.note}
					x={index*35}
					y={0}
					width={35}
					height={170}
					fill="rgb(255,255,255)"
					strokeWidth={2}
					stroke="rgb(0,0,0)"
					onClick={() => onKeyPressed(key)}
					onMouseEnter={onMouseEnter}
					onMouseLeave={onMouseLeave}
				/>
			})}
			{ interNotes.map((key, index) => {
				if (key.note === null)
					return <React.Fragment key={index}></React.Fragment>;
				const keyRef = useRef<SVGRectElement>(null);
				const onMouseEnter = useCallback(() => {
					if (keyRef.current)
						handleInterKeyHover(keyRef.current)
					onKeyPressed(key);
				}, [keyRef])
				const onMouseLeave = useCallback(() => {
					if (keyRef.current)
						handleInterKeyUnhover(keyRef.current)
				}, [keyRef])
				return <rect
					ref={keyRef}
					key={key.note}
					x={index*35 + 25}
					y={0}
					width={20}
					height={120}
					fill="rgb(0,0,0)"
					onClick={() => onKeyPressed(key)}
					onMouseEnter={onMouseEnter}
					onMouseLeave={onMouseLeave}
				/>
			})}
		</svg>
	)
}