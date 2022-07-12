import styles from '../styles/Intro.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Circle from './Circle'

const Intro = () => {
	return (
		<div className={styles.container}>
			<Circle
				backgroundColor='#009eff'
				left='-45vh'
				top='7vh'
				borderRadius='50%'
			/>
			<Circle
				backgroundColor='#1E90FF'
				top='-45vh'
				right='-60vh'
				borderRadius='50%'
			/>
			<div className={styles.card}>
				<h1 className={styles.title}>
					Vet<span className={styles.brand}>Clinic</span>
					<span className={styles.slogan}> For all you veterinary needs.</span>
				</h1>
				<p className={styles.description}>
					Our experienced veterinary team provides comprehensive medical care,
					ranging from routine to advanced procedures and treatments.{' '}
				</p>
				<Link href='/services/about'>
					<div className='btn'>Discover More</div>
				</Link>
			</div>

			<div className={styles.card}>
				<div>
					<Image
						src={process.env.NEXT_PUBLIC_URL + '/images/intro.png'}
						width='100%'
						height='100%'
						layout='responsive'
						priority
						alt='intro'
					/>
				</div>
			</div>
		</div>
	)
}

export default Intro
