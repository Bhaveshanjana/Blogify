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
import { CreateArticles } from "@/actions/CreateArticle";

const CreateArticlesPage = () => {
  const [content, setContent] = useState("");
  const [formState, action, isPending] = useActionState(CreateArticles, {
    errors: {},
  });
  console.log("Raw content:", content);
  // sending content because of conetnt strored in state and we use reactquill
  const handleFormData = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // removing br tag before sending
    const cleanedContent = content === "<p><br></p>" ? "" : content;

    const formData = new FormData(event.currentTarget);
    formData.append("content", cleanedContent);

    startTransition(() => {
      action(formData);
    });
  };
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
              <Input
                type="text"
                name="title"
                placeholder="Enter an Article title"
              />
              {formState.errors.title && (
                <span className="text-red-600 text-center bg-gray-800 inline-block w-full rounded-sm">
                  Please provide an vaild title
                </span>
              )}
              <div className="space-y-2">
                <Label>Category</Label>
                <select
                  name="category"
                  id="category"
                  className="flex h-10 w-full rounded-md border border-input bg-white dark:bg-[#2d33346c] transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
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
                  <span className="text-red-600 bg-gray-800 inline-block w-full text-center rounded-sm">
                    Plese provide an vaild category
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
                {formState.errors.featuredImage && (
                  <span className="font-medium text-sm text-red-500 text-center bg-gray-800 inline-block w-full rounded-sm mt-2">
                    Please provide an image
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <Label>Content </Label>
                <ReactQuill
                  theme="snow"
                  value={content}
                  onChange={setContent}
                />
                {formState.errors.content && (
                  <span className="text-red-600 dark:bg-gray-800 inline-block w-full rounded-sm text-center">
                    Please provide an vaild content
                  </span>
                )}
              </div>
              {formState.errors.formError && (
                <div className="dark:bg-transparent bg-red-100 p-2 border border-red-600">
                  <span className="font-medium text-sm text-red-500">
                    {formState.errors.formError}
                  </span>
                </div>
              )}
              <div className="flex justify-end gap-4">
                <Button variant={"outline"}>Cancel</Button>
                <Button type="submit" disabled={isPending}>
                  {isPending ? "Loading..." : "Publish Article"}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateArticlesPage;
