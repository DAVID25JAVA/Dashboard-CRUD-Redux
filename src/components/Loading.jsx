export default function LoadingAnimation() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner Animation */}
        <div className="relative">
          {/* Outer ring */}
          <div className="w-16 h-16 border-4 border-blue-200 rounded-full"></div>
          
          {/* Spinning ring */}
          <div className="w-16 h-16 border-4 border-blue-600 rounded-full border-t-transparent absolute top-0 left-0 animate-spin"></div>
        </div>
        
        {/* Loading text with pulse animation */}
        <div className="flex items-center gap-1">
          <span className="text-gray-700 font-medium">Loading</span>
          <span className="flex gap-1">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
          </span>
        </div>
      </div>
    </div>
  );
}