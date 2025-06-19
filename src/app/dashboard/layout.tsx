import LeftSideBar from "@/components/dashboard/LeftSideBar";
import React, { Suspense } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full">
      <div className="flex">
        <Suspense fallback={<SidebarSkeleton />}>
          <LeftSideBar />
        </Suspense>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default layout;

function SidebarSkeleton() {
  return (
    <div className="w-[250px] h-full bg-gray-100 p-4 animate-pulse">
      <div className="h-8 w-24 bg-gray-300 rounded mb-8" />
      {[...Array(6)].map((_, i) => (
        <div key={i} className="h-10 w-full bg-gray-300 rounded mb-2" />
      ))}
    </div>
  );
}
