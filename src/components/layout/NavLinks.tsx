
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Landmark } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SheetClose } from "@/components/ui/sheet";

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
      { href: "/loan-against-deposit", label: "Loan Against Deposit" },
    ]
  },
  { href: "/gallery", label: "Gallery" },
  { href: "/join", label: "Membership" },
  { href: "/contact", label: "Contact Us" },
];

const isPlansSubmenuActive = (pathname: string) => {
    return pathname.startsWith('/plans') || pathname === '/fixed-deposit' || pathname === '/recurring-deposit' || pathname === '/saving-deposit' || pathname === '/compulsory-deposit';
};

const isLoansSubmenuActive = (pathname: string) => {
    return pathname.startsWith('/loans') || pathname === '/personal-loan' || pathname === '/emergency-loan' || pathname === '/loan-against-deposit';
}

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-4 lg:gap-6">
      {navLinks.map(({ href, label, submenu }) => (
        submenu ? (
          <DropdownMenu key={href}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary-foreground focus:outline-none focus:ring-0 p-0 h-auto",
                  "data-[state=open]:text-primary-foreground",
                   isPlansSubmenuActive(pathname) && href === '/plans' ? "text-primary-foreground font-bold" : "text-primary-foreground/80",
                   isLoansSubmenuActive(pathname) && href === '/loans' ? "text-primary-foreground font-bold" : "text-primary-foreground/80",
                   pathname.startsWith(href) && href !== '/plans' && href !== '/loans' ? "text-primary-foreground font-bold" : "text-primary-foreground/80"
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
              "text-sm font-medium transition-colors hover:text-primary-foreground",
               pathname === href ? "text-primary-foreground font-bold" : "text-primary-foreground/80"
            )}
          >
            {label}
          </Link>
        )
      ))}
    </nav>
  );
}


export function MobileNavLinks() {
    const pathname = usePathname();
    return (
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
    )
}
