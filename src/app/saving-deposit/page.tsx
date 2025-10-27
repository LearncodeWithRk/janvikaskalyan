
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
      <section className="py-20 md:py-32 text-primary-foreground" style={{ backgroundColor: '#132440' }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Saving Deposit Account</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="my-16 md:my-24">
            <h2 className="text-3xl font-bold font-headline text-left mb-12">Saving Account : Return of Investment @ 6% per annum</h2>
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
                            <span>For membership information, please <Link href="/join" className="text-primary underline hover:text-primary/80">visit our membership page</Link>.</span>
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
