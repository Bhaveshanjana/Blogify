"use client"

import { SearchAction } from "@/actions/Search";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React from "react";

const SearchInput = () => {
  const params = useSearchParams()

  return (
    <form action={SearchAction}>
      <div className="relative ml-3">
        <Search className="absolute left-1.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          name="search"
          defaultValue={params.get("search") || ""}
          placeholder="Search articles..."
          className="pl-7 w-auto md:w-36  focus-visible:ring-1 lg:focus:w-96 transition-all duration-300"
        />
      </div>
    </form>
  );
};

export default SearchInput;
