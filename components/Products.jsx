import styles from '../styles/products.module.css'

const Products = ({ services }) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>What We Can Do?</h1>
			<h1 className={styles.subtitle}>Our Products And Services:</h1>
			<div className={styles.products}></div>
		</div>
	)
}

export default Products
