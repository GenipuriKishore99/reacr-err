import React from 'react'
import { useErrorBoundary } from 'react-error-boundary'

const ErrorBoundaries = () => {
    const errors=useErrorBoundary();
  return (
    <div>ErrorBoundary
        {/* <p>{errors.name}</p> */}
        <button onClick={errors}>Try Again</button>
    </div>
  )
}

export default ErrorBoundaries