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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
        <div className="flex flex-col h-full">
            <div className="p-6">
                <Link href="/" className="flex items-center gap-2">
                    <Landmark className="h-6 w-6 text-primary" />
                    <span className="font-bold">JVK</span>
                </Link>
            </div>
            <nav className="flex-grow px-4">
                <Accordion type="multiple" className="w-full">
                {navLinks.map(({ href, label, submenu }) => (
                    submenu ? (
                    <AccordionItem value={label} key={label} className="border-b-0">
                        <AccordionTrigger className="py-3 text-lg font-medium text-muted-foreground hover:text-primary hover:no-underline [&[data-state=open]>svg]:text-primary">
                            {label}
                        </AccordionTrigger>
                        <AccordionContent className="pl-4">
                            <div className="flex flex-col gap-2">
                                {submenu.map(item => (
                                <SheetClose key={item.href} asChild>
                                    <Link
                                    href={item.href}
                                    className={cn(
                                        "text-muted-foreground hover:text-primary",
                                        pathname === item.href && "text-primary font-semibold"
                                    )}
                                    >
                                    {item.label}
                                    </Link>
                                </SheetClose>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    ) : (
                    <SheetClose key={href} asChild>
                        <Link
                        href={href}
                        className={cn(
                            "block py-3 text-lg font-medium transition-colors hover:text-primary",
                            pathname === href ? "text-primary" : "text-muted-foreground"
                        )}
                        >
                        {label}
                        </Link>
                    </SheetClose>
                    )
                ))}
                </Accordion>
            </nav>
        </div>
    )
}