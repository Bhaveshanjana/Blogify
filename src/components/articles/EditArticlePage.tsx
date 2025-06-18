"use client";

import React, {
  FormEvent,
  startTransition,
  useActionState,
  useState,
} from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import { Button } from "@/components/ui/button";
import type { Articles } from "@/generated/prisma";
import { useRouter } from "next/navigation";
import { EditArticles } from "@/actions/EditArticle";

type ArticleProps = {
  article: Articles;
};
const EditArticlesPage: React.FC<ArticleProps> = ({ article }) => {
  const [content, setContent] = useState(article.content);
  const [formState, action, isPending] = useActionState(
    EditArticles.bind(null, article.id),
    {
      errors: {},
    }
  );

  // sending content because of content stored in state and we use reactquill
  const handleFormData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    formData.append("content", content);

    startTransition(() => {
      action(formData);
    });
  };

  const router = useRouter();
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Create New Article</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleFormData} className="space-y-6">
            <div className="space-y-4">
              <label htmlFor="title">Article Title</label>
              <Input type="text" name="title" defaultValue={article.title} />
              {formState.errors.title && (
                <span className="text-red-600">{formState.errors.title}</span>
              )}
              <div className="space-y-2">
                <Label>Category</Label>
                <select
                  name="category"
                  id="category"
                  defaultValue={article.category}
                  className="flex h-10 w-full rounded-md border border-input bg-[#2d33346c] transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                >
                  <option value="" className="dark:bg-gray-600">
                    Select category
                  </option>
                  <option value="technology" className="dark:bg-gray-600">
                    Technology
                  </option>
                  <option value="programming" className="dark:bg-gray-600">
                    Programming
                  </option>
                  <option value="web-development" className="dark:bg-gray-600">
                    Web development
                  </option>
                </select>
                {formState.errors.category && (
                  <span className="text-red-600">
                    {formState.errors.category}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="featuredImage">Featured Image</label>
                <Input
                  type="file"
                  id="featuredImage"
                  name="featuredImage"
                  accept="image/*"
                />
              </div>
              <div className="space-y-2">
                <Label>Content </Label>
                <ReactQuill
                  theme="snow"
                  value={content}
                  onChange={setContent}
                />
                {formState.errors.content && (
                  <span className="text-red-600">
                    {formState.errors.content}
                  </span>
                )}
              </div>
              <div className="flex justify-end gap-4">
                <Button onClick={() => router.back()} variant={"outline"}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isPending}>
                  {isPending ? "Loading..." : "Edit Article"}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditArticlesPage;
