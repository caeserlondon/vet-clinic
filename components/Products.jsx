import styles from '../styles/Products.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Products = ({ products }) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}></h1>
			<h1 className={styles.subtitle}>Our Products And Services:</h1>
			<div className={styles.products}>
				{products.map((product) => (
					<Link href={`/products/${product.name}`} key={product.id}>
						<div className={styles.product}>
							<span className={styles.category}>{products.title}</span>
							<div className={styles.media}>
								{product.vedio ? (
									<video
										src={product.video}
										autoPlay
										loop
										className={styles.video}
									/>
								) : (
									<Image
										src={`/images/${product.photo}`}
										width='100%'
										height='100%'
										layout='responsive'
										objectFit='cover'
										alt={product.title}
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
