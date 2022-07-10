import styles from '../styles/404.module.css'
import Link from 'next/link'

export default function NotFoundPage() {
	return (
		<div className={styles.error}>
			<h1>404</h1>
			<h3>We are sorry, But the page you are looking for does not exist. </h3>
			<div className={styles.button}>
				<Link href='/'>
					<div className='btn'>Back To The Main Page</div>
				</Link>
			</div>
		</div>
	)
}
