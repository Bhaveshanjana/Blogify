"use client";

import React, { useOptimistic, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Bookmark, Share2, ThumbsUp } from "lucide-react";
import { LikeDislike } from "@/actions/LikeDislike";
import { Like } from "@/generated/prisma";

type LikeDislikeProps = {
  articleId: string;
  likes: Like[];
  isLiked: boolean;
};

const LikeButton: React.FC<LikeDislikeProps> = ({
  articleId,
  likes,
  isLiked,
}) => {
  const [optimisticLike, setOptimisticLike] = useOptimistic(likes.length);
  const [isPending, startTransition] = useTransition();

  const handleController = () => {
    startTransition(async () => {
      setOptimisticLike(isLiked ? optimisticLike - 1 : optimisticLike + 1);
      await LikeDislike(articleId);
    });
  };
  return (
    <div className="flex gap-4 mb-12 border-t border-gray-50 pt-8">
      <form action={handleController}>
        <Button disabled={isPending} type="submit" variant={"ghost"} className="gap-2">
          <ThumbsUp className="h-5 w-5" />
          {optimisticLike}
        </Button>
      </form>
      <Button variant={"ghost"} className="gap-2">
        <Bookmark className="h-5 w-5" />
      </Button>
      <Button variant={"ghost"} className="gap-2">
        <Share2 className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default LikeButton;
