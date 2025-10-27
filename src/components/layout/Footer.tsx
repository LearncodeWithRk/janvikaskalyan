
import Link from 'next/link';
import { Landmark } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="md:col-span-1">
            <h2 className="text-lg font-semibold font-headline">जन विकास कल्याण कोआपरेटिव (U) थ्रिफ्ट &amp; क्रेडिट सोसाइटी लिमिटेड</h2>
            <p className="text-sm text-muted-foreground mt-2">Registration No: 10358/3TC/2015</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Important Link</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/join" className="text-muted-foreground hover:text-primary transition-colors">Join Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
           <div>
            <h3 className="text-lg font-semibold mb-4">More Info</h3>
            <ul className="space-y-2">
              <li><Link href="/documents" className="text-muted-foreground hover:text-primary transition-colors">Documents</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms</Link></li>
              <li><Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/disclaimer" className="text-muted-foreground hover:text-primary transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
          <div>
            {/* Keeping this empty for alignment, can be used for contact info or social media links later */}
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Jan Vikas Kalyan Co-operative Thrift &amp; Credit Society Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
