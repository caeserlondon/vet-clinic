import styles from '../styles/services.module.css'

const Services = ({ services }) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>What We Can Do?</h1>
			<h1 className={styles.subtitle}>Services We Can Help You With</h1>
			<div className={styles.services}></div>
		</div>
	)
}

export default Services
