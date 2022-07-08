import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
	return (
		<div className={styles.container}>
			<Link href='/'>
				<h2>
					Vet<span>Clinic</span>
				</h2>
			</Link>
			<ul className={styles.list}>
				<li className={styles.listItem}>
					<Link href='/'>Home</Link>
				</li>
				<li className={styles.listItem}>
					<Link href='/products/services'>Services</Link>
				</li>
				<li className={styles.listItem}>
					<Link href='/products/pet-care'>Pet Care</Link>
				</li>
				<li className={styles.listItem}>
					<Link href='/products/surgery'>Surgery</Link>
				</li>
				<li className={styles.listItem}>
					<Link href='/about'>About Us</Link>
				</li>
				<li className={styles.listItem}>
					<Link href='/contact-us'>Contact Us</Link>
				</li>
			</ul>
		</div>
	)
}

export default Navbar
