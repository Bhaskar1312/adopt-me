import {Component}  from "react";
import {Link, Navigate} from "react-router-dom";
import {render} from "react-dom";

// error boundaries are class components, cant use hooks
// if use need error boundaries in functional components, use class components

class ErrorBoundary extends Component {
    state = {hasError: false, redirect: false};
    static getDerivedStateFromError() {
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo);
    }

    componentDidUpdate(prevProps, prevState, snapshot) { // === useEffect with dependencies, doesn't run on first render
        if (this.state.hasError) {
            setTimeout(() => this.setState({redirect: true}), 5000);
        }
    }

    render() {

        if(this.state.redirect) {
            return <Navigate to="/"/>; // Navigate = Redirect
        } else if(this.state.hasError) {
            return (
                <h2>
                    This listing has an error. <Link to="/">Click here</Link> to go back to the home page.
                    Or wait five seconds.
                </h2>
            )
        }
        return this.props.children; // just return whatever is enclosed by the error boundary
    };
}
export default ErrorBoundary;