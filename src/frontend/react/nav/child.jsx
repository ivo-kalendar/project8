import React from 'react'

class Child extends React.Component {
	render() {
		return (
			this.props.green ?
			<div className="alert green">
				{this.props.name} write a message at {this.props.time}
			</div> : 
			<div className="alert red">
				At {this.props.time} {this.props.name} write a message...
			</div>
		)
	}
}

export default Child