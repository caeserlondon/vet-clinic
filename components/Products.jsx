import styles from '../styles/Products.module.css'
import Link from 'next/link'

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
								<video
									src={`/images/${product.video}`}
									autoPlay
									loop
									muted
									className={styles.video}
								/>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default Products
