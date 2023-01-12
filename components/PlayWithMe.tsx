import PianoRoll from "./PianoRoll";
import { useState } from "react";
import GuitarBoard from "./GuitarBoard";


export interface Key {
	note: string,
}
export default function PlayWithMe() {
	const [ keyPressed, setKeyPressed] = useState<Key | null>(null);
	return (
		<section className="flex flex-row">
			<div>
				<PianoRoll onKeyPressed={setKeyPressed} />
			</div>
			<GuitarBoard keyPressed={keyPressed} />
		</section>
	)
}