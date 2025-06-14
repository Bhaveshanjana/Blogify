"use client"

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const ReactQuil = dynamic(() => import("react-quill-new"), { ssr: false });
import { Button } from "@/components/ui/button";

const CreateArticles = () => {
  const [content, setContent] = useState("");
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Create New Article</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-4">
              <Input
                type="text"
                name="category"
                placeholder="Enter an Article title"
              />
              <div className="space-y-2">
                <Label>Category</Label>
                <select className="flex h-10 w-full rounded-md border border-input bg-[#2d33346c] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
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
              </div>
              <div className="space-y-2">
                <Label>Featured Image </Label>
                <ReactQuil theme="snow" value={content} onChange={setContent} />
              </div>
              <div className="flex justify-end gap-4">
                <Button variant={"outline"}>Cancel</Button>
                <Button type="submit">Publish Article</Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateArticles;
