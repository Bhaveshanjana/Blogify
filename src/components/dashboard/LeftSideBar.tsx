"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  ChartBar,
  FileText,
  Home,
  LayoutDashboard,
  LayoutDashboardIcon,
  MessageCircle,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface NavLink {
  href: string;
  icon: React.ReactNode;
  label: string;
  exact?: boolean;
  section?: string; // optional for "commingsoon" section links
}

const LeftSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant={"outline"} className="md:hidden m-4">
            <LayoutDashboardIcon className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"} className="w-[250px]">
          <DashBoardSideBar />
        </SheetContent>
      </Sheet>

      <div className="hidden md:block h-screen w-[250px] border-r bg-background">
        <DashBoardSideBar />
      </div>
    </div>
  );
};

const DashBoardSideBar = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentSection = searchParams.get("section");

  const links: NavLink[] = [
    {
      href: "/",
      icon: <Home className="h-5 w-5 mr-2" />,
      label: "Home",
      exact: true,
    },
    {
      href: "/dashboard",
      icon: <LayoutDashboard className="h-5 w-5 mr-2" />,
      label: "Overview",
      exact: true,
    },
    {
      href: "/dashboard/articles/create",
      icon: <FileText className="h-5 w-5 mr-2" />,
      label: "Articles",
    },
    {
      href: "/dashboard/commingsoon?section=comments",
      icon: <MessageCircle className="h-5 w-5 mr-2" />,
      label: "Comments",
      section: "comments",
    },
    {
      href: "/dashboard/commingsoon?section=analytics",
      icon: <ChartBar className="h-5 w-5 mr-2" />,
      label: "Analytics",
      section: "analytics",
    },
    {
      href: "/dashboard/commingsoon?section=settings",
      icon: <Settings className="h-5 w-5 mr-2" />,
      label: "Settings",
      section: "settings",
    },
  ];

  const isActive = (link: NavLink) => {
    // If it's an exact match route
    if (link.exact) return pathname === link.href;

    // For links with section param
    if (link.section) {
      return (
        pathname === "/dashboard/commingsoon" && currentSection === link.section
      );
    }

    // For other links
    return pathname.startsWith(link.href);
  };

  return (
    <div className="h-full px-4 py-6">
      <div className="flex items-center gap-2 mb-8 px-2">
        <Link href="/">
          <span className="text-xl font-bold">Blogify</span>
        </Link>
      </div>
      <nav className="space-y-1">
        {links.map((link, index) => (
          <Link key={link.label + index} href={link.href} passHref>
            <Button
              asChild
              key={link.label + index}
              variant={isActive(link) ? "secondary" : "ghost"}
              className={`w-full justify-start ${
                isActive(link)
                  ? "bg-accent font-medium"
                  : "text-muted-foreground"
              }`}
            >
              <Link href={link.href}>
                {link.icon}
                {link.label}
              </Link>
            </Button>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default LeftSideBar;
