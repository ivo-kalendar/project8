import React from 'react'
import Child from '../child.jsx'
import Parent from '../parent.jsx'

const Nav = () => {
	return (
		<nav>
			<Parent>
				<h3><Child name="Sam" time="09:33" /></h3>
				<h1><Child name="Din" time="04:55" state /></h1>
			</Parent>
			<Parent>
				<h3><Child name="Victor" time="13:25" /></h3>
				<h1><Child name="Sasha" time="10:25" /></h1>
				<h1><Child name="Jack" time="11:25" /></h1>
			</Parent>
			<Parent>
				<h3><Child name="Linda" time="10:05" /></h3>
				<h3><Child name="John" time="03:25" state={true} /></h3>
			</Parent>
		</nav>
	)
}

export default Nav