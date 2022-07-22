import Head from 'next/head'
import Intro from '../components/Intro'
import Products from '../components/Products.jsx'
import Testimonials from '../components/Testimonials'
import { links } from '../data'

export default function Home({ products }) {
	return (
		<div>
			<Head>
				<title>Vet Clinic</title>
				<meta
					name='description'
					content='Veterinary Clinic website created by Caeser Ibrahim'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Intro />

			<Products products={products} />

			<Testimonials />
		</div>
	)
}

export const getStaticProps = () => {
	const products = links

	return {
		props: { products },
	}
}
