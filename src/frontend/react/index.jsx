import React from 'react'
import Nav from './nav/nav.jsx'
import Header from './header/header.jsx'
import Main from './main/main.jsx'
import Footer from './footer/footer.jsx'

const Index = () => {
	return(
		<div className="container">
			<Nav />
			<Header />
			<Main />
			<Footer />
		</div>
	)
}

export default Index