"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import NavLinks from "./NavLinks";

export default function Header() {
  const [activeTab, setActiveTab] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // const scrollToSection = (sectionId: string) => {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //   }
  //   setActiveTab(sectionId);
  //   setMobileMenuOpen(false);
  // };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/30 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          <Link
            href="/"
            className="flex-shrink-0 inline-flex space-x-5 items-center  z-10"
          >
            <Image
              src="/geojogos.svg"
              alt="GeoJogos Logo"
              width={50}
              height={50}
              className="h-10 w-auto"
            />
            <h1 className="text-xl font-bold text-green-800">GeoJogos</h1>
          </Link>
          <nav className="container mx-auto px-4 py-4 absolute">
            <ul
              className={`flex flex-col lg:flex-row justify-center space-y-2 lg:space-y-0 lg:space-x-6 mt-4 lg:mt-0 ${
                mobileMenuOpen ? "block" : "hidden lg:flex"
              }`}
            >
              {["jogos", "blog", "sobre"].map((tab) => (
                <li key={tab}>
                  <Link href={`/${tab}`}>
                    <Button
                      variant={activeTab === tab ? "default" : "ghost"}
                      onClick={() => {
                        setActiveTab(tab);
                        setMobileMenuOpen(false);
                        // scrollToSection(tab);
                      }}
                      className="w-full lg:w-auto text-sm font-medium"
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="z-10 items-center justify-center sm:block hidden"></div>

          <div className="flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="hidden">Navegação</SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col space-y-4 mt-4">
                  <NavLinks />
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
