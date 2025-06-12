import NavBar from "@/components/home/header/NavBar";
import Hero from "@/components/home/Hero";
import TopArticles from "@/components/home/TopArticles";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BlogFooter } from "@/components/home/Blog";

const page = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <section className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Featured Articles
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Discover our most popular and trending content
            </p>
          </div>

          <TopArticles />
          <div className="mt-12 text-center">
            <Link href={"/articles"}>
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 text-lg hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900"
              >
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <BlogFooter />
    </main>
  );
};

export default page;
