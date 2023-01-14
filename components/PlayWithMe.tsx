import PianoRoll from "./PianoRoll";
import { useState } from "react";
import GuitarBoard from "./GuitarBoard";
import { keys } from "../lib/constants";


export interface Key {
	note: 'C' | 'D' | 'E' | 'F' | 'G' | 'A' | 'B' | 'C#' | 'D#' | 'F#' | 'G#' | 'Bb',
	scale: 0 | 1 | 2,
}
export default function PlayWithMe() {
	const [ keyHovered, setKeyHovered ] = useState<Key | null>(null);

	const playNote = (key: Key) => {
		const audioElement = document.getElementById(`${key.note + key.scale}-key`) as HTMLAudioElement
		if (audioElement) {
			audioElement.currentTime = 0;
			audioElement.play();
		}
	}

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
				<PianoRoll onKeyHover={setKeyHovered} onKeyPressed={playNote} />
			</div>
			<GuitarBoard keyHovered={keyHovered} />
			{ keys.map(key => {
				const id = key.note + key.scale;
				return <audio key={id} id={`${id}-key`} className="hidden" src={`/play-with-me/audio/${id.replace('#', 's')}.mp3`} />
			}) }
		</section>
	)
}