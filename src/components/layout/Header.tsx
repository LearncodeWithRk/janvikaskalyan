
"use client";

import Link from "next/link";
import { Menu, Landmark, Phone, Mail, FileText } from "lucide-react";
import Image from 'next/image';

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLinks, MobileNavLinks } from "./NavLinks";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-primary shadow-sm">
      <div className="text-primary-foreground py-2 text-xs" style={{ backgroundColor: '#132440' }}>
          <div className="container flex items-center justify-between px-4 md:px-6">
              <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span>+91 9625380067, +91 9205437299</span>
                  </div>
                  <div className="hidden md:flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <a href="mailto:Janvikaskalyan200@gmail.com" className="hover:underline">Janvikaskalyan200@gmail.com</a>
                  </div>
              </div>
              <Button variant="ghost" size="sm" asChild className="h-auto p-1 text-xs hover:bg-primary-foreground/20 hover:text-primary-foreground">
                <Link href="/forms">
                    <FileText className="mr-2 h-4 w-4" />
                    Membership Form
                </Link>
              </Button>
          </div>
      </div>
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="https://res.cloudinary.com/learncodewithrk/image/upload/v1761631670/JVK%20IMG/logojvk_flqvna.png" alt="JVK Logo" width={85} height={85} />
          
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
