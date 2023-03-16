import { Html, Head, Main, NextScript } from 'next/document'
import React from "react";

export default function Document() {
	return (
		<Html>
			<Head>
				<meta name="description" content="Toumani Sidibe's personal website" />
				<link rel="icon" href="/images/avatar.jpg" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
