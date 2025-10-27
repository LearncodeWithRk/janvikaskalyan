
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, UserCheck, ArrowRight, Shield } from "lucide-react";
import Link from "next/link";
import { getImage } from "@/lib/placeholder-images";

export default function LoanAgainstDepositPage() {
  const loanImage = getImage("loan-against-deposit");

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Loan Against Deposit</h1>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold font-headline mb-4">Unlock the Value of Your Savings</h2>
            <p className="text-muted-foreground mb-6">
              Need funds but don't want to liquidate your long-term savings? Our Loan Against Deposit facility is the perfect solution. It allows you to borrow against your Fixed Deposit (FD) or Recurring Deposit (RD), providing immediate liquidity while your savings continue to grow. It's a smart way to manage your financial needs without compromising your financial goals.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Enquire Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="order-1 md:order-2">
            {loanImage && (
              <Image
                src={loanImage.imageUrl}
                alt={loanImage.description}
                data-ai-hint={loanImage.imageHint}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            )}
          </div>
        </div>

        <div className="my-16 md:my-24">
            <h2 className="text-3xl font-bold font-headline text-center mb-12">Features & Benefits</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="text-center">
                    <CardHeader>
                        <CardTitle className="text-lg">Lower Interest Rate</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Enjoy a lower rate of interest compared to unsecured personal loans.</p>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardHeader>
                        <CardTitle className="text-lg">Quick Disbursal</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Minimal documentation means faster processing and quick access to funds.</p>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardHeader>
                        <CardTitle className="text-lg">No Collateral Needed</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Your deposit acts as security, so no additional collateral is required.</p>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardHeader>
                        <CardTitle className="text-lg">Savings Remain Intact</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Your deposit continues to earn interest even while you have an active loan.</p>
                    </CardContent>
                </Card>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
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
                            <span>Must be an active member of Jan Vikas Kalyan Society.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span>Must have an active Fixed Deposit or Recurring Deposit with the society.</span>
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
                            <span>Completed Loan Application Form.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span>Original Fixed/Recurring Deposit receipt.</span>
                        </li>
                         <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span>Standard KYC documents (ID and Address proof).</span>
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </div>

      </div>
    </div>
  );
}
