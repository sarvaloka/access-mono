'use client'

import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
	const Cover = (
		<div className={styles.header}>
			<div className={styles.avatar}>
				<Image
					width={160}
					height={160}
					src={'/avatar.svg'}
					alt={'website'}></Image>{' '}
			</div>
			<h1>Powering India’s Next Generation Industrial Revolution</h1>
			<div className={styles.cover}></div>
		</div>
	)

	const Footer = (
		<div className={styles.cover}>
			<b>
				#1 VOC Street, Mahalaxmi Nagar, Selaiyur Road, East Tambaram, Chennai -
				600 073
			</b>
			<p>
				Copyright © All Rights Reserved | Incorporated as Dewallstreet Private
				Limited ®{' '}
			</p>
		</div>
	)

	const Socials = (
		<div className={styles.socials}>
			<button
				onClick={() => window.open('https://instagram.com/agni.sarvaloka')}
				style={{ color: 'white', backgroundColor: 'black' }}>
				<Image
					width={18}
					height={18}
					src={'/instagram.svg'}
					alt={'website'}></Image>
				Instagram
			</button>
			<button
				onClick={() => window.open('https://linkedin.com/in/agni-sarvaloka')}
				style={{
					color: 'white',
					backgroundColor: 'black',
				}}>
				<Image
					width={20}
					height={20}
					src={'/linkedin.svg'}
					alt={'website'}></Image>
				Linkedin
			</button>
			<button
				onClick={() =>
					window.open(
						'//api.whatsapp.com/send?phone=918122801215&text=Would love to get an appointment with the Chairman, Sarvaloka Industries.'
					)
				}
				style={{ color: 'white', backgroundColor: 'black' }}>
				<Image
					width={18}
					height={18}
					src={'/whatsapp.svg'}
					alt={'website'}></Image>
				Whatsapp
			</button>
		</div>
	)

	return (
		<main className={styles.wrapper}>
			{Cover}
			<div className={styles.toolbar}>
				<Link
					style={{
						borderColor: '#F2F1F1',
						borderWidth: '2px',
						display: 'flex',
						gap: '6px',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}
					href={'mailto:chairmab@sarvaloka.in'}>
					<Image width={18} height={18} src={'/mail.svg'} alt={'mail'}></Image>
					Email
				</Link>
				<Link
					style={{
						display: 'flex',
						gap: '6px',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}
					href={'tel:+918122801215'}>
					<Image width={18} height={18} src={'/phone.svg'} alt={'call'}></Image>
					Call
				</Link>
				<Link
					style={{
						display: 'flex',
						gap: '6px',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}
					href={'https://g.co/kgs/M1rcN59'}>
					{' '}
					<Image
						width={18}
						height={18}
						src={'/map-pin.svg'}
						alt={'map'}></Image>
					Location
				</Link>
			</div>
			<div className={styles.ctrls}>
				{Socials}
				<button
					onClick={() => window.open('https://sarvaloka.in')}
					style={{ color: 'black', backgroundColor: '#0DFF00' }}>
					<Image
						width={18}
						height={18}
						src={'/globe.svg'}
						alt={'website'}></Image>
					Visit Website
				</button>
			</div>
			{Footer}
		</main>
	)
}
