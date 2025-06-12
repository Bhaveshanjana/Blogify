import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText, MessageCircle, PlusCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import RecentArticles from "./RecentArticles";

const DashBoardBlog = () => {
  return (
    <main className="flex-1 p-4 md:p-8">
      <div className="flex justify-between itens-center mb-8">
        <div>
          <h1 className="font-bold text-2xl">Blog Dashboard</h1>
          <p>Manage your content and analytics</p>
        </div>
        <Link href="/dashboard/articles/create">
          <Button>
            <PlusCircle className="h-4 w-4" />
            New Article
          </Button>
        </Link>
      </div>
      {/* Quick stats */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {/* Card 01 */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y- pb-2">
            <CardTitle className="font-medium text-sm">
              Totol Articles
            </CardTitle>
            <FileText className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-sm text-muted-foreground mt-1">
              +5 from last month
            </p>
          </CardContent>
        </Card>
        {/* Card 02 */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y- pb-2">
            <CardTitle className="font-medium text-sm">
              Totol Comments
            </CardTitle>
            <MessageCircle className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-sm text-muted-foreground mt-1">
              12 awaiting moderation
            </p>
          </CardContent>
        </Card>
        {/* Card 03 */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y- pb-2">
            <CardTitle className="font-medium text-sm">
              Ang. Rating Time
            </CardTitle>
            <MessageCircle className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2</div>
            <p className="text-sm text-muted-foreground mt-1">
              0.6 from last month
            </p>
          </CardContent>
        </Card>
      </div>
      {/* Recent Articles */}
      <RecentArticles />
    </main>
  );
};

export default DashBoardBlog;
