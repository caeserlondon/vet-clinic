import Footer from './Footer'
import Navbar from './Navbar'
import Head from 'next/head'

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Vet Clinic</title>
				<meta name='description' content='Created by CaeserLondon' />
			</Head>
			<div>
				<Navbar />
				{children}
				<Footer />
			</div>
		</>
	)
}

export default Layout
