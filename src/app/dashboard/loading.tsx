"use client";

import React, { useState, useEffect } from "react";

interface DashboardLoaderProps {
  isLoading: boolean;
}

const DashboardLoader: React.FC<DashboardLoaderProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="h-screen bg-[linear-gradient(218deg,#101828_0%,#3d4b69_22%,#3d4b69_35%,#101828_47%,#3d4b69_57%,#000_97%)] flex items-center justify-center ">
      <div className="text-center">
        {/* Animated chart bars */}
        <div className="flex items-end justify-center space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-sm animate-pulse"
              style={{
                width: "8px",
                height: `${20 + i * 8}px`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: "1.5s",
              }}
            />
          ))}
        </div>

        <div className="text-gray-600 font-medium">Loading Dashboard...</div>

        {/* Animated dots */}
        <div className="flex justify-center space-x-1 mt-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <>
      <DashboardLoader isLoading={isLoading} />
    </>
  );
};

export default Dashboard;
