import AllArticlePage from "@/components/articles/AllArticlePage";
import SearchArticle from "@/components/articles/SearchArticle";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:text-5xl">
        {/* header */}
        <div className="mb-12 space-y-6 text-center">
          <h1 className="text-4xl font-bold sm:text-5x1">All Articles</h1>
          {/* Article search page */}
          <SearchArticle />
        </div>
        {/* All article psge */}
        <AllArticlePage />
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
