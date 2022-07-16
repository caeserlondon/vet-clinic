import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
	const [open, setOpen] = useState(false)

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
					<Link href='/services/health-checks'>Health Checks</Link>
				</li>
				<li className={styles.listItem}>
					<Link href='/services/pet-care'>Pet Care</Link>
				</li>
				<li className={styles.listItem}>
					<Link href='/services/surgery'>Surgery</Link>
				</li>
				<li className={styles.listItem}>
					<Link href='/services/about'>About Us</Link>
				</li>
				<li className={styles.listItem}>
					<Link href='/services/contact'>Contact Us</Link>
				</li>
			</ul>
			<div className={styles.menu} onClick={() => setOpen(!open)}>
				<div className={styles.line} />
				<div className={styles.line} />
				<div className={styles.line} />
			</div>
			<ul
				className={styles.menulist}
				onClick={() => setOpen(false)}
				style={{ right: open ? '0px' : '-50vw' }}
			>
				<li className={styles.menulistItem}>
					<div className='btn' onClick={() => setOpen(!open)}>
						Close The Menu
					</div>
				</li>
				<li className={styles.menulistItem}>
					<Link href='/services/health-checks'>Health Checks</Link>
				</li>
				<li className={styles.menulistItem}>
					<Link href='/services/pet-care'>Pet Care</Link>
				</li>
				<li className={styles.menulistItem}>
					<Link href='/services/surgery'>Surgery</Link>
				</li>
				<li className={styles.menulistItem}>
					<Link href='/services/about'>About Us</Link>
				</li>
				<li className={styles.menulistItem}>
					<Link href='/contact'>Contact Us</Link>
				</li>
			</ul>
		</div>
	)
}

export default Navbar
