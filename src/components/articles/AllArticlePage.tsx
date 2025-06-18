import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { fetchArticle } from "@/lib/query/fetcharticle";
import { Search } from "lucide-react";
import Link from "next/link";

type ArticleProps = {
  searchText: string;
};
const AllArticlePage: React.FC<ArticleProps> = async ({ searchText }) => {
  const articles = await fetchArticle(searchText);

  if (articles.length <= 0) {
    return <NoSearchResults />;
  }
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((articl) => (
        <Link href={`/articles/${articl.id}`}>
          <Card
            key={articl.id}
            className="group relative overflow-hidden translate-all hover:shadow-lg"
          >
            <div className="p-3">
              <div className="relative mb-4 h-52 w-full overflow-hidden rounded-xl">
                <Image
                  alt="blogImage"
                  className="object-cover"
                  fill
                  src={articl.featuredImage}
                />
              </div>
              {/* Article content */}
              <h3 className="text-xl font-semibold">{articl.title}</h3>
              <p className="mt-2 text-lg">{articl.category}</p>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={articl.author.imageUrl || ""} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{articl.author.name}</span>{" "}
                </div>
                <div className="text-sm">{articl.createAt.toDateString()}</div>{" "}
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default AllArticlePage;

const NoSearchResults = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="mb-4 rounded-full bg-muted p-4">
        <Search className="h-8 w-8" />
      </div>
      <h3 className="font-bold ">No Result found</h3>
      <p className="mt-2 text-lg">
        We could not find any articles matching your search. Try a different
        keywords or phrase.
      </p>
    </div>
  );
};
