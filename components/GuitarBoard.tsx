import React, {useRef} from "react";
import { Key } from "./PlayWithMe";

export default function GuitarBoard({ keyPressed }: { keyPressed: (Key | null) }) {
	const guitarImageRef = useRef<HTMLImageElement>(null);
	const interStringHeight = guitarImageRef.current !== null ? guitarImageRef.current.height / 40 : 10

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
		<div className="w-full" style={{ backgroundColor: '#111' }}>
			<div className="relative m-auto w-3/4">
				<img className="relative" alt="Shoulder" src="/play-with-me/shoulder-off.png" />
				<img ref={guitarImageRef} className="absolute top-0 z-10" alt="Guitar fret board" src="/play-with-me/guitar.png"/>
				<img
					className="absolute top-0 z-20"
					style={{ transform: `translateY(${interStringHeight * (6 - stringNb)}px)` }}
					src={`/play-with-me/${handImageSrc}.png`}
					alt="Hand off the guitar"
				/>
			</div>
		</div>
	)
}

const getGuitarPosition = (key: Key): { stringNb: 1 | 2 | 3 | 4 | 5 | 6, fretNb: 0 | 1 | 2 | 3 | 4 } => {
	let stringNb: 1 | 2 | 3 | 4 | 5 | 6 = 1;
	let fretNb: 0 | 1 | 2 | 3 | 4 = 0;
	if (key.scale === 0) {
		switch (key.note) {
			case 'E': stringNb = 6; fretNb = 0; break;
			case 'F': stringNb = 6; fretNb = 1; break;
			case 'G': stringNb = 6; fretNb = 3; break;
			case 'A': stringNb = 5; fretNb = 0; break;
			case 'B': stringNb = 5; fretNb = 2; break;

			case 'F#': stringNb = 6; fretNb = 2; break;
			case 'G#': stringNb = 6; fretNb = 4; break;
			case 'Bb': stringNb = 5; fretNb = 1; break;
		}
	}

	if (key.scale === 1) {
		switch (key.note) {
			case 'C': stringNb = 5; fretNb = 3; break;
			case 'D': stringNb = 4; fretNb = 0; break;
			case 'E': stringNb = 4; fretNb = 2; break;
			case 'F': stringNb = 4; fretNb = 3; break;
			case 'G': stringNb = 3; fretNb = 0; break;
			case 'A': stringNb = 3; fretNb = 2; break;
			case 'B': stringNb = 2; fretNb = 0; break;

			case 'C#': stringNb = 5; fretNb = 4; break;
			case 'D#': stringNb = 4; fretNb = 1; break;
			case 'F#': stringNb = 4; fretNb = 4; break;
			case 'G#': stringNb = 3; fretNb = 1; break;
			case 'Bb': stringNb = 3; fretNb = 3; break;
		}
	}

	if (key.scale === 2) {
		switch (key.note) {
			case 'C': stringNb = 2; fretNb = 1; break;
			case 'D': stringNb = 2; fretNb = 3; break;
			case 'E': stringNb = 1; fretNb = 0; break;
			case 'F': stringNb = 1; fretNb = 1; break;
			case 'G': stringNb = 1; fretNb = 3; break;

			case 'C#': stringNb = 2; fretNb = 2; break;
			case 'D#': stringNb = 2; fretNb = 4; break;
			case 'F#': stringNb = 1; fretNb = 2; break;
		}
	}

	return { stringNb, fretNb }
}