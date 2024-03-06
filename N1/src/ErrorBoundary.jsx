import { Component } from "react";
import { Link } from "react-router-dom";

export class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary component caught an error", info, error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Sorry! Something seems to have happened.</h2>
          <Link to="/">
            <h3>Click here to go back</h3>
          </Link>
        </div>
      );
    }

    return this.props.children;
  }
}
