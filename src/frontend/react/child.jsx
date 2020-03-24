import React from 'react'

const Child = props => {
	return (
		props.state ? <div className="alert green">Hello {props.name} I will be there at {props.time} tommorow...</div>
		: <div className="alert red">Hello {props.name} I will be there at {props.time} tommorow...</div>
	)
}

export default Child