import React from 'react'

interface AnchorProps {
	href?: string,
}

function Anchor(props: React.PropsWithChildren<AnchorProps>) {
	return (
		<a
			className="text-blue-700"
			href={props.href}
		>{ props.children }</a>)
}

export default Anchor;