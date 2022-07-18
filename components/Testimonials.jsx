import { users } from '../data'
import styles from '../styles/Testimonials.module.css'
import Circle from './Circle'
// import Image from 'next/image'

const Testimonials = () => {
	return (
		<div className={styles.container}>
			<div className={styles.circle}>
				<Circle
					backgroundColor='#1E90FF'
					top='-75vh'
					left='0'
					right='0'
					borderRadius='40%'
				/>
			</div>
			<h1 className={styles.title}>Testimonials</h1>

			<div className={styles.wrapper}>
				{users.map((user) => (
					<div key={user.id} className={styles.card}>
						{/* <Image */}
						<img
							src={`${process.env.NEXT_PUBLIC_URL}/images/${user.logo}`}
							alt='user logo'
							width='30'
							height='30'
						/>
						<p className={styles.comments}>{user.comment}</p>
						<div className={styles.person}>
							{/* <Image */}
							<img
								src={`${process.env.NEXT_PUBLIC_URL}/images/${user.avatar}`}
								alt='user photo'
								width='45'
								height='45'
								objectFit='cover'
								className={styles.avatar}
							/>
							<div className={styles.info}>
								<span className={styles.username}>{user.name}</span>
								<span className={styles.jobtitle}>{user.title}</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Testimonials
