import React from 'react'
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'

// Simple user-friendly fallback UI for unexpected errors.
const Fallback: React.FC<{ error: Error }> = ({ error }) => {
  return (
    <div role="alert" className="form-bg rounded-2xl p-4 max-w-xl mx-auto">
      <h2 className="text-heading-sales font-bold mb-2">Something went wrong</h2>
      <pre className="text-xs text-[#13556F] whitespace-pre-wrap">{error.message}</pre>
    </div>
  )
}

// Error boundary wrapper used at the router level.
export const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ReactErrorBoundary FallbackComponent={Fallback}>
      {children}
    </ReactErrorBoundary>
  )
}


