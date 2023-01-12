import React from "react";
import { Key } from "./PlayWithMe";

export default function GuitarBoard({ keyPressed }: { keyPressed: (Key | null) }) {
	const { stringNb, fretNb } = keyPressed == null ? { stringNb: 6, fretNb: 0 } : getGuitarPosition(keyPressed);
	let handImageSrc: string;
	switch (fretNb) {
		case 0: handImageSrc = 'hand-off'; break;
		case 1: handImageSrc = 'hand-index'; break;
		case 2: handImageSrc = 'hand-middle'; break;
		case 3: handImageSrc = 'hand-ring'; break;
		case 4: handImageSrc = 'hand-pinky'; break;
		default: handImageSrc = 'hand-off';
	}
	return (
		<div className="relative w-72" style={{ backgroundColor: '#111' }}>
			<img className="absolute z-10" alt="Shoulder" src="/play-with-me/shoulder-off.png" />
			<img className="absolute z-10" alt="Guitar fret board" src="/play-with-me/guitar.png"/>
			<img
				className="absolute z-20"
				style={{ transform: `translateY(${5 * (6 - stringNb)}px)` }}
				src={`/play-with-me/${handImageSrc}.png`}
				alt="Hand off the guitar"
			/>
		</div>
	)
}

// TODO implement properly this function
const getGuitarPosition = (key: Key): { stringNb: 1 | 2 | 3 | 4 | 5 | 6, fretNb: 0 | 1 | 2 | 3 | 4 } => {
	let stringNb: 1 | 2 | 3 | 4 | 5 | 6 = 1;
	let fretNb: 0 | 1 | 2 | 3 | 4 = 0;
	switch (key.note) {
		case 'C': stringNb = 5; fretNb = 3; break;
		case 'D': stringNb = 4; fretNb = 0; break;
		case 'E': stringNb = 4; fretNb = 2; break;
		case 'F': stringNb = 4; fretNb = 3; break;
		case 'G': stringNb = 3; fretNb = 0; break;
		case 'A': stringNb = 3; fretNb = 2; break;

		case 'C#': stringNb = 5; fretNb = 4; break;
		case 'D#': stringNb = 4; fretNb = 1; break;
		case 'F#': stringNb = 4; fretNb = 4; break;
		case 'G#': stringNb = 3; fretNb = 1; break;
		case 'Bb': stringNb = 3; fretNb = 3; break;
	}

	return { stringNb, fretNb }
}