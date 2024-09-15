import { useState, useEffect } from 'react';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (error, errorInfo) => {
      console.error('Error caught by ErrorBoundary:', error, errorInfo);
      setHasError(true);
    };

    // Add a global error listener
    window.addEventListener('error', handleError);

    // Cleanup the listener on component unmount
    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);

  if (hasError) {
    return (
      <div className='h-lvh flex items-center justify-center outline p-3'>
        <h1 className='h-fit w-fit text-lg'>Something went wrong.</h1>
      </div>
    );
  }
  return children;
};

export default ErrorBoundary;