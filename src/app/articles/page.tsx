import AllArticlePage from "@/components/articles/AllArticlePage";
import SearchArticle from "@/components/articles/SearchArticle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React, { Suspense } from "react";

type SearchText = {
  searchParams: Promise<{ search?: string }>;
};
const page: React.FC<SearchText> = async ({ searchParams }) => {
  const searchText = (await searchParams).search || "";
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:text-3xl">
        {/* header */}
        <div className="mb-12 space-y-6 text-center">
          <h1 className="text-4xl font-bold sm:text-5x1">All Articles</h1>
          {/* Article search page */}
          <Suspense>
            <SearchArticle />
          </Suspense>
        </div>
        {/* All article page */}
        <Suspense fallback={<ArticlesPageSkeleton />}>
          <AllArticlePage searchText={searchText} />
        </Suspense>
        {/* pagination */}
        <div className="mt-12 flex justify-center gap-2">
          <Button variant={"ghost"}>← Preve</Button>
          <Button variant={"ghost"}>1</Button>
          <Button variant={"ghost"}>2</Button>
          <Button variant={"ghost"}>3</Button>
          <Button variant={"ghost"}>Next →</Button>
        </div>
      </main>
    </div>
  );
};

export default page;

export function ArticlesPageSkeleton() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <Card
          key={index}
          className="group relative overflow-hidden transition-all hover:shadow-lg"
        >
          <div className="p-6">
            {/* Article Image Skeleton */}
            <Skeleton className="mb-4 h-48 w-full rounded-xl bg-gradient-to-br from-purple-100/50 to-blue-100/50 dark:from-purple-900/20 dark:to-blue-900/20" />

            {/* Article Title Skeleton */}
            <Skeleton className="h-6 w-3/4 rounded-lg" />

            {/* Article Category Skeleton */}
            <Skeleton className="mt-2 h-4 w-1/2 rounded-lg" />

            {/* Author & Metadata Skeleton */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Author Avatar Skeleton */}
                <Skeleton className="h-8 w-8 rounded-full" />

                {/* Author Name Skeleton */}
                <Skeleton className="h-4 w-20 rounded-lg " />
              </div>

              {/* Date Skeleton */}
              <Skeleton className="h-4 w-24 rounded-lg " />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
