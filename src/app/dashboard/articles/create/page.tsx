import CreateArticles from "@/components/articles/CreateArticlesPage";
import React, { Suspense } from "react";

const page = () => {
  return (
    <div>
      <Suspense>
        <CreateArticles />
      </Suspense>
    </div>
  );
};

export default page;
