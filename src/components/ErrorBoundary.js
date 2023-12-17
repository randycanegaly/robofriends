import React, { Component } from 'react';

class ErrorBoundary extends Component {
//So far, I haven't found a pure function component
//way to do this
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(error, info) {
		this.setState({ hasError: true} )
	}

	render() {
		if(this.state.hasError) {
			return <h1>An error has occurred.</h1>
		}

		return this.props.children;
	}
}

export default ErrorBoundary;