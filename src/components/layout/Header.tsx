
"use client";

import Link from "next/link";
import { Menu, Landmark, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { 
    href: "/plans", 
    label: "Our Plans",
    submenu: [
      { href: "/fixed-deposit", label: "Fixed Deposit" },
      { href: "/recurring-deposit", label: "Recurring Deposit" },
      { href: "/saving-deposit", label: "Saving Deposit" },
      { href: "/compulsory-deposit", label: "Compulsory Deposit" },
    ]
  },
  { 
    href: "/loans", 
    label: "Loans",
    submenu: [
      { href: "/personal-loan", label: "Personal/Regular Loan" },
      { href: "/emergency-loan", label: "Emergency Loan" },
      { href: "/loans#loan-against-deposit", label: "Loan Against Deposit" },
    ]
  },
  { href: "/join", label: "Membership" },
  { href: "/contact", label: "Contact Us" },
];

export function Header() {
  const pathname = usePathname();

  const isPlansSubmenuActive = (pathname: string) => {
    return pathname.startsWith('/plans') || pathname === '/fixed-deposit' || pathname === '/recurring-deposit' || pathname === '/saving-deposit' || pathname === '/compulsory-deposit';
  };

  const isLoansSubmenuActive = (pathname: string) => {
    return pathname.startsWith('/loans') || pathname === '/personal-loan' || pathname === '/emergency-loan';
  }

  const NavLinks = ({ className, inSheet = false }: { className?: string; inSheet?: boolean }) => (
    <nav className={cn("flex items-center gap-4 lg:gap-6", className)}>
      {navLinks.map(({ href, label, submenu }) => (
        submenu ? (
          <DropdownMenu key={href}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary focus:outline-none focus:ring-0 p-0 h-auto",
                  "data-[state=open]:text-primary",
                   isPlansSubmenuActive(pathname) && href === '/plans' ? "text-primary font-bold" : "text-foreground/80",
                   isLoansSubmenuActive(pathname) && href === '/loans' ? "text-primary font-bold" : "text-foreground/80",
                   pathname.startsWith(href) && href !== '/plans' && href !== '/loans' ? "text-primary font-bold" : "text-foreground/80",
                   inSheet && "text-lg justify-start w-full",
                   inSheet && (isPlansSubmenuActive(pathname) && href === '/plans') ? "text-primary" : inSheet ? "text-muted-foreground" : "",
                   inSheet && (isLoansSubmenuActive(pathname) && href === '/loans') ? "text-primary" : inSheet ? "text-muted-foreground" : "",
                   inSheet && (pathname.startsWith(href) && href !== '/plans' && href !== '/loans') ? "text-primary" : inSheet ? "text-muted-foreground" : ""
                )}
              >
                {label}
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {submenu.map(item => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href}>{item.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link
            key={href}
            href={href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
               pathname === href ? "text-primary font-bold" : "text-foreground/80",
               inSheet && "text-lg",
               inSheet && pathname === href ? "text-primary" : inSheet ? "text-muted-foreground" : ""
            )}
          >
            {label}
          </Link>
        )
      ))}
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Landmark className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">Jan Vikas Kalyan</span>
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
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2">
                  <Landmark className="h-6 w-6 text-primary" />
                  <span className="font-bold">Jan Vikas Kalyan</span>
                </Link>
                <nav className="grid gap-4">
                  {navLinks.map(({ href, label, submenu }) => (
                     submenu ? (
                      <div key={href}>
                        <h3 className={cn(
                           "text-lg font-medium transition-colors hover:text-primary flex items-center",
                           isPlansSubmenuActive(pathname) && href === '/plans' ? "text-primary" : "text-muted-foreground",
                           isLoansSubmenuActive(pathname) && href === '/loans' ? "text-primary" : "text-muted-foreground",
                           pathname.startsWith(href) && href !== '/plans' && href !== '/loans' ? "text-primary" : "text-muted-foreground"
                         )}>
                          {label}
                        </h3>
                        <div className="flex flex-col pl-4 mt-2 gap-2">
                          {submenu.map(item => (
                            <SheetClose key={item.href} asChild>
                              <Link
                                href={item.href}
                                className="text-muted-foreground hover:text-primary"
                              >
                                {item.label}
                              </Link>
                            </SheetClose>
                          ))}
                        </div>
                      </div>
                     ) : (
                      <SheetClose key={href} asChild>
                        <Link
                          href={href}
                          className={cn(
                            "text-lg font-medium transition-colors hover:text-primary",
                            pathname === href ? "text-primary" : "text-muted-foreground"
                          )}
                        >
                          {label}
                        </Link>
                      </SheetClose>
                     )
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
