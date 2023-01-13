import PianoRoll from "./PianoRoll";
import { useState } from "react";
import GuitarBoard from "./GuitarBoard";


export interface Key {
	note: 'C' | 'D' | 'E' | 'F' | 'G' | 'A' | 'B' | 'C#' | 'D#' | 'F#' | 'G#' | 'Bb',
	scale: 0 | 1 | 2,
}
export default function PlayWithMe() {
	const [ keyPressed, setKeyPressed] = useState<Key | null>(null);
	return (
		<section className="flex flex-col items-center w-full">
			<header className="self-start">
				<h2 className="my-4 text-2xl text-white font-bold lg:text-4xl">Play with me</h2>
				<p className="text-gray-400 lg:text-lg">
					Let's make the next tube together! I can play whatever you want me to but the creativity part is on your side 😌.<br />
					Let's rock!
				</p>
			</header>
			<div>
				<PianoRoll onKeyPressed={setKeyPressed} />
			</div>
			<GuitarBoard keyPressed={keyPressed} />
		</section>
	)
}