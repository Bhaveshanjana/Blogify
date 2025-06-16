import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const CommentField = () => {
  return (
    <form action="" className="mb-8">
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage src="" />
          <AvatarFallback>CN</AvatarFallback>{" "}
        </Avatar>
        <div className="flex-1">    
          <Input type="text" name="body" placeholder="Add a comment..." />
          <div className="mt-4 flex justify-end">
            <Button>Post comment</Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CommentField;
