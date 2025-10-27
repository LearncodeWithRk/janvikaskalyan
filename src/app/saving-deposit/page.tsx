
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, UserCheck, ArrowRight, Banknote, Shield, BookOpen, Clock } from "lucide-react";
import Link from "next/link";
import { getImage } from "@/lib/placeholder-images";

export default function SavingDepositPage() {
  const savingDepositImage = getImage("saving-deposit");

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Saving Deposit Account</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Your flexible savings solution with an attractive Return of Investment at 6% per annum. Manage your daily finances while your money grows.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold font-headline mb-4">Liquidity and Growth, Hand in Hand</h2>
            <p className="text-muted-foreground mb-6">
              Our Saving Deposit account is designed for your day-to-day financial needs. It offers complete liquidity, allowing you to deposit and withdraw funds as needed, while also earning you a competitive interest rate on your balance. It's the perfect way to keep your surplus cash safe and productive.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Open an Account <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="order-1 md:order-2">
            {savingDepositImage && (
              <Image
                src={savingDepositImage.imageUrl}
                alt={savingDepositImage.description}
                data-ai-hint={savingDepositImage.imageHint}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            )}
          </div>
        </div>

        <div className="my-16 md:my-24">
            <h2 className="text-3xl font-bold font-headline text-center mb-12">Special Features</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                <Card className="text-center">
                    <CardHeader>
                        <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-3">
                            <Shield className="h-7 w-7 text-primary" />
                        </div>
                        <CardTitle className="text-lg">No TDS</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground text-sm">No TDS is applicable on the interest earned on deposits.</p>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardHeader>
                        <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-3">
                            <Banknote className="h-7 w-7 text-primary" />
                        </div>
                        <CardTitle className="text-lg">Higher Interest</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground text-sm">Offers higher interest rates compared to traditional banks.</p>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardHeader>
                        <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-3">
                           <BookOpen className="h-7 w-7 text-primary" />
                        </div>
                        <CardTitle className="text-lg">Passbook Provided</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground text-sm">A passbook will be provided to keep track of your transactions.</p>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardHeader>
                        <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-3">
                            <Clock className="h-7 w-7 text-primary" />
                        </div>
                        <CardTitle className="text-lg">Anytime Banking</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground text-sm">Conveniently deposit and withdraw your funds anytime.</p>
                    </CardContent>
                </Card>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="shadow-lg">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <UserCheck className="h-8 w-8 text-primary" />
                        <CardTitle className="text-2xl font-headline">Eligibility</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span>The applicant must be a member of the Jan Vikas Kalyan Society.</span>
                        </li>
                        <li className="flex items-start">
                             <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span>For membership information, please <Link href="/join" className="text-primary underline hover:text-primary/80">click here</Link>.</span>
                        </li>
                    </ul>
                </CardContent>
            </Card>
            <Card className="shadow-lg">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <FileText className="h-8 w-8 text-primary" />
                        <CardTitle className="text-2xl font-headline">Required Documents</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                     <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span>Completed account opening form.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span>Identity and Address Proof as per KYC norms.</span>
                        </li>
                         <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span>Recent passport-size photograph.</span>
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </div>

      </div>
    </div>
  );
}
