import React from "react";

const loading = () => {
  return (
    <div className="min-h-screen bg-gray-700 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header skeleton */}
        <div className="mb-8">
          <div className="h-4 bg-gray-500 rounded animate-pulse w-24 mb-4"></div>
          <div className="h-10 bg-gray-500 rounded animate-pulse w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-500 rounded animate-pulse w-1/2"></div>
        </div>

        {/* Article skeleton */}
        <div className="space-y-6 ">
          <div className="flex items-center gap-4 mb-8 pb-4 ">
            <div className="h-10 w-10 bg-gray-500 rounded-full animate-pulse"></div>
            <div className="flex-1">
              <div className="h-4 bg-gray-500 rounded animate-pulse w-32 mb-2"></div>
              <div className="h-3 bg-gray-500 rounded animate-pulse w-24"></div>
            </div>
          </div>

          {/* Paragraph*/}
          <div className="space-y-3">
            <div className="h-4 bg-gray-500 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-500 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-500 rounded animate-pulse w-4/5"></div>
          </div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-500 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-500 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-500 rounded animate-pulse w-4/5"></div>
          </div>
          <div className="border-b-2 border-gray-500 border-spacing-y-6"></div>
        </div>

        {/* Article comment skeleton */}
        <div className="space-y-6 mt-12">
          <div className="flex items-center gap-4 mb-8 pb-4 ">
            <div className="h-10 w-10 bg-gray-500 rounded-full animate-pulse"></div>
            <div className="flex-1">
              <div className="h-4 bg-gray-500 rounded animate-pulse w-32 mb-2"></div>
              <div className="h-3 bg-gray-500 rounded animate-pulse w-24"></div>
            </div>
          </div>

          {/* Paragraph*/}
          <div className="space-y-3">
            <div className="h-4 bg-gray-500 rounded animate-pulse"></div>
          </div>
        </div>

        {/* Loading indicator */}
        <div className="fixed bottom-8 right-8">
          <div className="bg-gray-300 rounded-full p-3 shadow-lg border">
            <div className="animate-spin h-6 w-6 border-2 border-blue-600 border-t-transparent rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;
