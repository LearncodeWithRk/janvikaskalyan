import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PartyPopper } from "lucide-react";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-32 flex items-center justify-center">
      <Card className="max-w-md w-full text-center shadow-lg">
        <CardHeader>
          <div className="mx-auto bg-accent/10 p-4 rounded-full w-fit">
            <PartyPopper className="h-12 w-12 text-accent" />
          </div>
          <CardTitle className="text-3xl font-headline mt-4">Thank You!</CardTitle>
          <CardDescription>Your message has been sent successfully.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">We appreciate you reaching out. A member of our team will be in touch with you shortly.</p>
          <Button asChild>
            <Link href="/">Return to Home</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
