import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Sarvaloka | Business Network',
	description:
		'Sarvaloka Access is a business networking platform for the sarvaloka industrial ecosystem',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={jakarta.className}>{children}</body>
		</html>
	)
}
