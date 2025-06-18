"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <section className="relative min-h-[650px] w-full overflow-hidden bg-gradient-to-br from-purple-600 via-indigo-950 to-indigo-950">
      <div className="max-w-7xl relative mx-auto flex h-full flex-col items-center justify-center px-4  py-24 md:flex-row md:py-32">
        <div className="flex-1 space-y-8 text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5x1 md:text-6xl">
            Explore the World Through
            <span className="bg-gradient-to-r from-violet-400 bg-clip-text text-transparent">
              {" "}
              Words
            </span>
          </h1>
          <p className="mx-auto max-w-2x1 text-lg text-gray-300 md:text-xl">
            Discover insightfull articles, thought-provoking stories, and expert
            perespectives on technology, lifestyle and innovation{" "}
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row md:justify-start">
            <Button
              onClick={() => router.push("/articles")}
              className="rounded-full cursor-pointer"
            >
              Start Reading
            </Button>
            <Button
              className="rounded-full cursor-pointer "
              variant={"outline"}
            >
              Explore Topics
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8 text-white md:mx-w-md">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">1k+</div>
              <div className="text-sm text-gray-400">Published articles</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">10+</div>
              <div className="text-sm text-gray-400">Expert Writers</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">1m+</div>
              <div className="text-sm text-gray-400">Monthly Readers</div>
            </div>
          </div>
        </div>
        {/* image frame */}

        <div className="mt-12 flex-1 md:mt-8">
          <div
            className={cn(
              "relative mx-auto w-64 h-64 rounded-2xl overflow-hidden",
              "bg-gradient-to-br from-white/5 to-transparent",
              "border border-primary/20 backdrop-blur-lg",
              "shadow-2xl shadow-indigo-500/10"
            )}
          >
            <img
              src="https://img.freepik.com/premium-vector/vector-person-sitting-chair-reading-book_844724-16686.jpg?semt=ais_items_boosted&w=740"
              alt="hero-image"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
