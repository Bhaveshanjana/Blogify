import React from "react";
import { Button } from "@/components/ui/button";
import { Bookmark, Share2, ThumbsUp } from "lucide-react";

const LikeButton = () => {
  return (
    <div className="flex gap-4 mb-12 border-t border-gray-50 pt-8">
      <form action="">
        <Button variant={"ghost"} className="gap-2">
          <ThumbsUp className="h-5 w-5" />0
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
