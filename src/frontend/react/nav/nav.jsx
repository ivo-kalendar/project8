import React from 'react'
import Test from '../test.jsx'

const Nav = () => {
	return(
		<nav>
			<h1>{Test.statement ? Test.seampleTest : Test.anoteherTest}</h1>
		</nav>
	)
}

export default Nav