'use client'
import { AlertCircle, RefreshCw } from 'lucide-react';
import { useSelector } from 'react-redux';

export default function Error() {

   const {error} = useSelector((state)=>state?.tasks)

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center gap-4 max-w-md px-6">
        {/* Error Icon Animation */}
        <div className="relative">
          {/* Pulsing background circle */}
          <div className="w-20 h-20 bg-red-100 rounded-full absolute top-0 left-0 animate-ping opacity-75"></div>
          
          {/* Static background circle */}
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center relative">
            <AlertCircle className="w-10 h-10 text-red-600" strokeWidth={2.5} />
          </div>
        </div>
        
        {/* Error message */}
        <div className="text-center space-y-2">
          <h3 className="text-xl font-semibold text-gray-800">Oops!</h3>
          <p className="text-gray-600">{error}</p>
        </div>

        {/* Retry button (optional)
        {onRetry && (
          <button
            onClick={onRetry}
            className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors shadow-sm hover:shadow-md"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
        )} */}
      </div>
    </div>
  );
}