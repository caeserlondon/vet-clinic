import styles from '../styles/Contact.module.css'
import Circle from '../components/Circle'

const contact = () => {
	const onSubmit = () => {
		alert('we have received your inquiry and we will get back to you shortly')
	}
	return (
		<div className={styles.container}>
			<div>
				<Circle
					backgroundColor='#009eff'
					left='-45vh'
					top='7vh'
					borderRadius='50%'
					zIndex='-1'
				/>
				<Circle
					backgroundColor='#1E90FF'
					top='-45vh'
					right='-60vh'
					borderRadius='50%'
					zIndex='-1'
					filter='blur(28px)'
				/>
				<Circle
					backgroundColor='#1E90FF'
					top='-35vh'
					right='-50vh'
					borderRadius='50%'
					zIndex='-1'
				/>
				<h1 className={styles.title}>Get In Touch</h1>
				<form className={styles.form} onSubmit={onSubmit}>
					<input
						type='text'
						className={styles.inputsmall}
						placeholder='Your Name'
						required
					/>
					<input
						type='text'
						className={styles.inputsmall}
						placeholder='Your Phone Number'
						required
					/>
					<input
						type='email'
						className={styles.inputlarge}
						placeholder='Your Email'
						required
					/>
					<input className={styles.inputlarge} placeholder='Subject' />
					<textarea
						className={styles.textarea}
						rows={6}
						minLength={10}
						placeholder='Message'
						required
					/>
					<button className={styles.button}>
						<div className='btn'>Submit</div>
					</button>
				</form>
			</div>
		</div>
	)
}

export default contact
