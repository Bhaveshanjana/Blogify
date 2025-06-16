import ArticleDetailsPage from "@/components/articles/ArticleDetailsPage";
import { prisma } from "@/lib/prisma";
import React from "react";

type ArticleDetailsParams = {
  params: Promise<{ id: string }>;
};
const page: React.FC<ArticleDetailsParams> = async ({ params }) => {
  const id = (await params).id;

  const article = await prisma.articles.findUnique({
    where: { id },
    include: {
      coments: true,
      author: {
        select: {
          name: true,
          email: true,
          imageUrl: true,
        },
      },
    },
  });
  if (!article) {
    return(
    <h1>Article Not found</h1>
);
  }
  return (<div>
    <ArticleDetailsPage article={article}/>
  </div>);
};

export default page;
