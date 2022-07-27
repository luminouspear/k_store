import React, { Component } from 'react'

class ErrorBoundary extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hasError: false,
            message: "Something went wrong"
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    render() {
        if (this.state.hasError) {
            return <div className="alert alert-danger">{this.props.message}</div>
        }
        return (
            this.props.children
        )
    }
}

export default ErrorBoundary