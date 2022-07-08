import Head from 'next/head'
import Intro from '../components/Intro'
import Services from '../components/Services.jsx'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		// <div className={styles.container}>
		<div>
			<Head>
				<title>Vet Clinic</title>
				<meta name='description' content='Created by CaeserLondon' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Intro />
			<Services />
		</div>
	)
}
