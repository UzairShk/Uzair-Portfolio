import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error Boundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            backgroundColor: "#020617",
            color: "#e2e8f0",
            fontFamily: "Poppins, sans-serif",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <h1 style={{ marginBottom: "16px", color: "#38bdf8" }}>
            Something went wrong
          </h1>
          <p style={{ marginBottom: "20px", fontSize: "16px" }}>
            The app failed to render. Check the console for details.
          </p>
          <pre
            style={{
              maxWidth: "720px",
              width: "100%",
              whiteSpace: "pre-wrap",
              textAlign: "left",
              background: "rgba(15, 23, 42, 0.9)",
              border: "1px solid rgba(56, 189, 248, 0.2)",
              borderRadius: "12px",
              padding: "16px",
              overflowX: "auto",
            }}
          >
            {this.state.error?.toString()}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: "20px",
              padding: "12px 20px",
              border: "none",
              borderRadius: "10px",
              background: "#38bdf8",
              color: "#020617",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
