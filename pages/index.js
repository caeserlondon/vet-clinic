import Head from 'next/head'
import Intro from '../components/Intro'
import Products from '../components/Products.jsx'
import { data } from '../data'

export default function Home({ products }) {
	// console.log(services)
	return (
		<div>
			<Head>
				<title>Vet Clinic</title>
				<meta name='description' content='Created by CaeserLondon' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Intro />
			<Products products={products} />
		</div>
	)
}

export const getStaticProps = () => {
	const products = data

	return {
		props: { products },
	}
}
