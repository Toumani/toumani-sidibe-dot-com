import React from "react";
import { useCallback, useRef } from "react";
import { Key } from "./PlayWithMe";

export default function PianoRoll({ onKeyPressed }: { onKeyPressed: (key: Key) => void }) {
	const wholeKey: Key[] = [
		{ note: 'E', scale: 0 },
		{ note: 'F', scale: 0 },
		{ note: 'G', scale: 0 },
		{ note: 'A', scale: 0 },
		{ note: 'B', scale: 0 },

		{ note: 'C', scale: 1 },
		{ note: 'D', scale: 1 },
		{ note: 'E', scale: 1 },
		{ note: 'F', scale: 1 },
		{ note: 'G', scale: 1 },
		{ note: 'A', scale: 1 },
		{ note: 'B', scale: 1 },

		{ note: 'C', scale: 2 },
		{ note: 'D', scale: 2 },
		{ note: 'E', scale: 2 },
		{ note: 'F', scale: 2 },
		{ note: 'G', scale: 2 },
	];
	const interNotes: (Key | null)[] = [
		null,
		{ note: 'F#', scale: 0 },
		{ note: 'G#', scale: 0 },
		{ note: 'Bb', scale: 0 },
		null,
		{ note: 'C#', scale: 1 },
		{ note: 'D#', scale: 1 },
		null,
		{ note: 'F#', scale: 1 },
		{ note: 'G#', scale: 1 },
		{ note: 'Bb', scale: 1 },
		null,
		{ note: 'C#', scale: 2 },
		{ note: 'D#', scale: 2 },
		null,
		{ note: 'F#', scale: 2 },
	]
	const handleWholeKeyHover = (key: SVGRectElement) => { key.style.fill = '#ccc'; }
	const handleWholeKeyUnhover = (key: SVGRectElement) => { key.style.fill = '#fff'; }
	const handleInterKeyHover = (key: SVGRectElement) => { key.style.fill = '#333'; }
	const handleInterKeyUnhover = (key: SVGRectElement) => { key.style.fill = '#000'; }

	return (
		<svg viewBox="0 0 595 170" xmlns="http://www.w3.org/2000/svg" width="245pt" height="170pt">
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
					key={key.note + key.scale}
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
				if (key === null)
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
					key={key.note + key.scale}
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