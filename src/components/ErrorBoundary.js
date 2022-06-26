class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    render() {
      if (this.state.hasError) {
        // rendering custom fallback UI
        return <h1 style={{transform: 'translate(-50%, -50%)'}} >Something went wrong!</h1>;
      }
  
      return this.props.children; 
    }
  }