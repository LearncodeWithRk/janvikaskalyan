"use client";

import Link from "next/link";
import { Menu, Landmark } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { NavLinks, MobileNavLinks } from "./NavLinks";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Landmark className="h-6 w-6 text-primary-foreground" />
          <span className="font-bold text-lg text-primary-foreground">JVK</span>
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <NavLinks />
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
                <MobileNavLinks />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
