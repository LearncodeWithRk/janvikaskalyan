import Link from 'next/link';
import { Facebook, Twitter, Instagram, HandHeart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <HandHeart className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Jan Vikas Kalyan</span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              Working towards the upliftment and development of society through various welfare activities.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/documents" className="text-muted-foreground hover:text-primary transition-colors">Documents</Link></li>
              <li><Link href="/resources" className="text-muted-foreground hover:text-primary transition-colors">Resources</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors"><Facebook /></Link>
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors"><Twitter /></Link>
              <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors"><Instagram /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Jan Vikas Kalyan Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
