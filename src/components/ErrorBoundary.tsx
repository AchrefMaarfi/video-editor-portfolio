import React, { ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in component:', error, errorInfo);
  }

  public handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[300px] flex flex-col items-center justify-center p-8 text-center bg-surface border border-border rounded-2xl my-8 max-w-xl mx-auto text-text">
          <div className="p-4 rounded-full bg-accent-tint text-accent-strong mb-4">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <h2 className="font-outfit text-xl font-bold mb-2">Something went wrong</h2>
          <p className="text-text-muted text-xs font-inter mb-6">
            An unexpected error occurred while loading this section.
          </p>
          <button
            onClick={this.handleReset}
            className="px-6 min-h-11 bg-accent hover:bg-accent-hover text-white text-xs font-bold uppercase tracking-widest rounded-xl flex items-center gap-2 transition-all"
          >
            <RefreshCw className="w-4 h-4" />
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
