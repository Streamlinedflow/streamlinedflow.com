import React from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import ThemeToggle from "./ThemeToggle";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  return (
    <AnimatedSection delay={0} type="fadeIn">
      <div className="container mx-auto px-4">
        <nav className="section-container relative py-2 flex items-center justify-center lg:justify-between">
          {/* Mobile Sheet Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="lg:hidden absolute left-4 p-2 focus:outline-none"
              >
                <Menu size={30} />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-3/4 max-w-xs p-0">
              <SheetHeader className="p-6 border-b flex justify-center">
                <SheetTitle>
                  <Link href="/" className="flex items-center space-x-2">
                    <Image
                      src="/logo.svg"
                      alt="SL Flow Logo"
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                    <span className="text-lg font-bold">SL Flow</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="p-6 flex flex-col items-start space-y-4">
                {links.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-base font-medium nav-link"
                  >
                    {label}
                  </Link>
                ))}
                <Link
                  href="/#book-call"
                  className="btn-gradient w-full text-center py-2"
                >
                  Book a Call
                </Link>
              </div>
            </SheetContent>
          </Sheet>

          {/* Mobile Theme Toggle */}
          <div className="lg:hidden absolute right-4 p-2">
            <ThemeToggle />
          </div>

          {/* Logo Left on desktop, Center on md/sm */}
          <Link href="/" className="flex-shrink-0 flex items-center space-x-2">
            <Image
              src="/logo.svg"
              alt="SL Flow Logo"
              width={56}
              height={56}
              className="w-12 h-12 object-contain"
            />
            <div className="text-3xl lg:text-xl font-bold logo-text">
              <span>SL</span>
              <span className="bg-gradient-to-r from-[#38b6ff] to-[#0066cc] text-transparent bg-clip-text">
                Flow
              </span>
            </div>
          </Link>

          {/* Desktop Links Centered */}
          <div className="hidden lg:flex flex-1 justify-center space-x-8 mx-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="nav-link hover:text-blue-600"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Actions Right on desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button asChild>
              <Link href="/#book-call">Book a Call</Link>
            </Button>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </AnimatedSection>
  );
}
