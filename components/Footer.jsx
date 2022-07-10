import Link from 'next/link'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'

const Footer = () => {
	const footerYear = new Date().getFullYear()
	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h2>
					Vet<span>Clinic</span>
				</h2>
				<p className={styles.slogan}> For all you veterinary needs.</p>
				<Link href='/contact-us'>
					<div className='btn'>Contact Us</div>
				</Link>
			</div>

			<div className={styles.card}>
				<div className={styles.cardItem}>
					<p>vet-clinic@gmail.co.uk</p>
					<p>+44-987-654-321</p>
				</div>
				<div className={styles.cardItem}>
					<p>666 Hyde Park Corner</p>
					<p>W2 2UH</p>
				</div>
			</div>

			<div className={styles.card}>
				<div className={styles.cardItem}>
					<p>FOLLOW US</p>
				</div>

				<div className={styles.media}>
					<Image
						src={'/images/facebook.png'}
						alt='facebook'
						width='26'
						height='26'
					/>
					<Image
						src={'/images/twitter.png'}
						alt='twitter'
						width='26'
						height='26'
					/>
					<Image
						src={'/images/instagram.png'}
						alt='instagram'
						width='26'
						height='26'
					/>
					<Image src={'/images/yelp.png'} alt='yelp' width='26' height='26' />
				</div>
				<div className={styles.cardItem}>
					<p>Copyrights &copy; {footerYear}</p>
					<p>Vet Clinic | All Rights Reserved</p>
				</div>
			</div>
		</div>
	)
}

export default Footer
