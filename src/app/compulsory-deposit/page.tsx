
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, UserCheck, ArrowRight, Lock, User, IndianRupee, PiggyBank, Shield } from "lucide-react";
import Link from "next/link";
import { getImage } from "@/lib/placeholder-images";

export default function CompulsoryDepositPage() {
  const compulsoryDepositImage = getImage("compulsory-deposit");

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 text-primary-foreground" style={{ backgroundColor: '#132440' }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Compulsory Deposit</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:py-24">
        
        <div className="my-16 md:my-24">
            <h2 className="text-3xl font-bold font-headline text-center mb-12">Compulsory Deposit : Return of Investment @ 9% per annum</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                        <User className="h-8 w-8 text-primary" />
                        <CardTitle className="text-lg">ELIGIBILITY</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2 text-muted-foreground">
                           <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0"/><span>The applicant must be a member of the Society.</span></li>
                           <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0"/><span>For Society membership related information <Link href="/join" className="text-primary underline">(Click Here)</Link>.</span></li>
                        </ul>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                        <Shield className="h-8 w-8 text-primary" />
                        <CardTitle className="text-lg">SPECIAL FEATURES</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /> No TDS is applicable on the interest earned on deposits.</li>
                            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /> Offers higher interest rates.</li>
                             <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /> Passbook will be provided.</li>
                            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /> Any time deposit and withdrawal.</li>
                        </ul>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                        <IndianRupee className="h-8 w-8 text-primary" />
                        <CardTitle className="text-lg">MINIMUM DEPOSIT AMOUNT</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Rs. 100/-</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                        <PiggyBank className="h-8 w-8 text-primary" />
                        <CardTitle className="text-lg">NOMINATION FACILITY</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Nomination Facility Available.</p>
                    </CardContent>
                </Card>
            </div>
        </div>

      </div>
    </div>
  );
}
