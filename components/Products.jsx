import styles from '../styles/Products.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Products = ({ products }) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Welcome To Our Clinic .</h1>
			<h1 className={styles.subtitle}>Our Products And Services:</h1>
			<div className={styles.products}>
				{products.map((product) => (
					<Link href={`/services/${product.name}`} key={product.id}>
						<div className={styles.product}>
							<span className={styles.category}>{product.title}</span>
							<div className={styles.media}>
								{product.video ? (
									<video
										src={`/images/${product.video}`}
										autoPlay
										loop
										muted
										className={styles.video}
									/>
								) : (
									<Image
										src={`/images/${product.photo}`}
										width='90%'
										height='90%'
										layout='responsive'
										objectFit='fill'
										alt={product.title}
										priority
									/>
								)}
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default Products
