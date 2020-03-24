import React from 'react'

const Parent = props => {
	console.warn(props)
	return (
		<div className="alert parent">You are inside of a Parent element
			{props.children}
		</div>
	)
}

export default Parent