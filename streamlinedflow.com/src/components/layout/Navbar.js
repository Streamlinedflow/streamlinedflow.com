'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "../common/AnimatedSection";
import ThemeToggle from "../common/ThemeToggle";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/#case-studies", label: "Case Studies" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#contact", label: "Contact Us" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-100/70 dark:bg-zinc-950/70 backdrop-blur-md shadow-sm"
          : "bg-gray-100 dark:bg-zinc-950"
      }`}
    >
      <AnimatedSection delay={0} type="fadeIn">
        <div className="w-full px-2 sm:px-4 pt-2 overflow-visible">
          <nav className="flex items-center justify-center lg:justify-between p-4 mx-auto max-w-[90rem]">
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <button
                  aria-label="Open menu"
                  className="lg:hidden absolute left-2 p-2 focus:outline-none"
                >
                  <Menu size={30} />
                </button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-3/4 max-w-xs p-0 bg-gray-100 dark:bg-zinc-900 border-l border-gray-200 dark:border-blue-500/15 [&>button]:text-black dark:[&>button]:text-white"
              >
                <SheetHeader className="p-6 border-b border-gray-200 dark:border-blue-500/15 flex justify-center">
                  <SheetTitle>
                    <Link href="/" className="flex items-center space-x-2">
                      <Image
                        src="/logo.svg"
                        alt="SL Flow Logo"
                        width={48}
                        height={48}
                        className="w-12 h-12"
                      />
                      <span className="text-lg font-bold text-gray-900 dark:text-white">
                        SL Flow
                      </span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="p-6 flex flex-col items-start space-y-4">
                  {links.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="relative font-bold text-base dark:text-white hover:underline underline-offset-4"
                    >
                      {label}
                    </Link>
                  ))}
                  <Link
                    href="/#book-call"
                    className="px-5 py-2.5 rounded-lg font-medium text-white bg-gradient-to-r from-[#38b6ff] to-[#0080ff] shadow hover:from-[#0080ff] hover:to-[#38b6ff] transition-all w-full text-center"
                  >
                    Book a Call
                  </Link>
                </div>
              </SheetContent>
            </Sheet>

            {/* Mobile Theme Toggle */}
            <div className="md:hidden absolute right-2 p-2 hide-theme-toggle-xs">
              <ThemeToggle />
            </div>

            {/* Logo */}
            <Link
              href="/"
              className="flex-shrink-0 flex items-center md:space-x-2"
            >
              <Image
                src="/logo.svg"
                alt="SL Flow Logo"
                width={56}
                height={56}
                className="w-12 h-12 object-contain"
              />
              <div className="text-sm lg:text-xl font-bold">
                <span>SL</span>
                <span>Flow</span>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex flex-1 justify-center space-x-8 ">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="relative font-bold text-base bg-clip-text hover:underline underline-offset-4"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/#book-call"
                className="px-5 py-2.5 rounded-lg font-medium text-white bg-gradient-to-r from-[#38b6ff] to-[#0080ff] shadow hover:from-[#0080ff] hover:to-[#38b6ff] transition-all"
              >
                Book a Call
              </Link>
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </AnimatedSection>
    </header>
  );
}

