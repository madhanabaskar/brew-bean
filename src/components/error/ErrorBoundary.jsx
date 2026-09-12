import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Home, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md w-full bg-white p-8 md:p-12 text-center border border-espresso/10 shadow-sm"
          >
            <AlertCircle className="w-16 h-16 text-coffee mx-auto mb-6" />
            <h1 className="text-3xl font-serif text-espresso mb-4">Something went wrong.</h1>
            <p className="text-espresso/70 mb-8 leading-relaxed">
              We couldn't load this part of Brew & Bean. Please try again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={this.handleRetry} variant="primary" className="flex items-center gap-2">
                <RefreshCw size={18} />
                Try Again
              </Button>
              <Button to="/" variant="outline" className="flex items-center gap-2" asChild>
                <span>
                  <Home size={18} />
                  Go Home
                </span>
              </Button>
            </div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}
