import Link from 'next/link';
import { Facebook, Twitter, Instagram, Landmark } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Landmark className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Jan Vikas Kalyan</span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              A trusted one-stop financial partner in Delhi offering savings, deposits &amp; member-friendly loans.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Important Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/plans" className="text-muted-foreground hover:text-primary transition-colors">Our Plans</Link></li>
              <li><Link href="/loans" className="text-muted-foreground hover:text-primary transition-colors">Loans</Link></li>
              <li><Link href="/join" className="text-muted-foreground hover:text-primary transition-colors">Join Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms &amp; Conditions</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/documents" className="text-muted-foreground hover:text-primary transition-colors">Forms</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Jan Vikas Kalyan Co-operative Thrift &amp; Credit Society Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
