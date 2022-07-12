import styles from '../../styles/About.module.css'

const about = () => {
	return (
		<div className={styles.container}>
			<div className={styles.about}>
				<h1> Disclaimer: </h1>

				<h2>
					This website is fictional, for personal use and non commercial purpose
					only. Vet Clinic is<span>NOT</span>a veterinary clinic and
					<span>NO</span>one will contact you even if you got in touch with the
					website.
				</h2>
				<h3>
					If your pet is unwell please seek professional medical help and advice
					!!!
				</h3>
				<h2>
					All media ( photos and videos ) used in the website were taken with
					gratitude from PEXELS.COM
				</h2>
			</div>
		</div>
	)
}

export default about
