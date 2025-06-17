import React from "react";
import { Prisma } from "@/generated/prisma";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import LikeButton from "./LikeButton";
import CommentList from "../comments/CommentList";
import CommentField from "../comments/CommentField";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

type ArticleDetailProps = {
  article: Prisma.ArticlesGetPayload<{
    include: {
      author: {
        select: {
          name: true;
          email: true;
          imageUrl: true;
        };
      };
    };
  }>;
};
const ArticleDetailsPage: React.FC<ArticleDetailProps> = async ({
  article,
}) => {
  const comments = await prisma.comment.findMany({
    where: { articleId: article.id },
    include: {
      author: {
        select: {
          name: true,
          email: true,
          imageUrl: true,
        },
      },
    },
  });

  const like = await prisma.like.findMany({
    where: { articleId: article.id },
  });

  const { userId } = await auth();

  const user = await prisma.user.findUnique({
    where: { clerkUserId: userId as string },
  });

  const isLiked: boolean = like.some((like) => like.userId === user?.id);
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-3xl">
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 text-sm ">{article.category}</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={article.author.imageUrl || ""} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{article.author.name}</p>
                <p className="text-sm">
                  {article.createAt.toDateString()}. 12 min to read
                </p>
              </div>
            </div>
          </header>
          <section
            className="mb-12 max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          {/* Article action button */}
          <LikeButton likes={like} isLiked={isLiked} articleId={article.id} />
          {/* Comment field */}
          <CommentField articleId={article.id} />
          {/* Comment section */}
          <CommentList comments={comments} />
        </article>
      </main>
    </div>
  );
};

export default ArticleDetailsPage;
