import styles from '../../styles/Service.module.css'
import { data } from '../../data'
import Image from 'next/image'
import Link from 'next/link'

const Service = ({ service }) => {
	return (
		<div className={styles.container}>
			<div className={styles.cardlarge}>
				{service.images.map((img) => (
					<div key={img.id} className={styles.imgContainer}>
						<Image
							src={img.url}
							alt='image'
							width='100%'
							height='100%'
							objectFit='cover'
						/>
					</div>
				))}
			</div>
			<div className={styles.cardsmall}>
				<h1 className={styles.title}>{service.title}</h1>
				<p className={styles.desc}>{service.desc}</p>
				<div className={styles.button}>
					<Link href='/contact-us'>
						<div className='btn'>Contact Us</div>
					</Link>
				</div>
			</div>
		</div>
	)
}

export const getStaticPaths = async () => {
	const services = data
	const paths = services.map((item) => {
		return {
			params: { name: item.name },
		}
	})
	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps = async (context) => {
	const name = context.params.name
	const service = data.filter((item) => item.name === name)[0]
	return {
		props: { service },
	}
}

export default Service
