import React, { ReactNode, Component, ErrorInfo } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error;
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
  }

  public state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError = (
    error: Error
  ): ErrorBoundaryState => {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  };

  public componentDidCatch = (error: Error, errorInfo: ErrorInfo): void => {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    console.error({ error, errorInfo });
  };

  public render = (): ReactNode => {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  };
}
