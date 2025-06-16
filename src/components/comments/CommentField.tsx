"use client";

import React, { useActionState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { createComments } from "@/actions/CreateComment";

type CommentInputProps = {
  articleId: string;
};
const CommentField: React.FC<CommentInputProps> = ({ articleId }) => {
  const [formState, action, isPending] = useActionState(
    createComments.bind(null, articleId),
    { errors: {} }
  );
  return (
    <form action={action} className="mb-8">
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage src="" />
          <AvatarFallback>CN</AvatarFallback>{" "}
        </Avatar>
        <div className="flex-1">
          <Input type="text" name="body" placeholder="Add a comment..." />
          {formState.errors.body && (
            <p className="text-red-500 text-sm">{formState.errors.body}</p>
          )}
          <div className="mt-4 flex justify-end">
            <Button disabled={isPending} type="submit">
              {isPending ? "Loading..." : "Post comment"}
            </Button>
          </div>
          {formState.errors.formErrors && (
            <div className="p-2 border border-red-400 bg-red-100">
              {formState.errors.formErrors[0]}
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default CommentField;
