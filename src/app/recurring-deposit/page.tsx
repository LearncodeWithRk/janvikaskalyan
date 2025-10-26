
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, UserCheck, ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";
import { getImage } from "@/lib/placeholder-images";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const interestRates = [
  { period: "1 Year", general: "11.00%", senior: "11.50%" },
  { period: "2 Years", general: "11.50%", senior: "12.00%" },
  { period: "3 Years", general: "12.00%", senior: "12.50%" },
  { period: "4 Years", general: "12.50%", senior: "13.00%" },
  { period: "5 Years", general: "13.00%", senior: "13.50%" },
];


export default function RecurringDepositPage() {
  const rdImage = getImage("recurring-deposit");

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Recurring Deposit (RD)</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discipline your savings and build a substantial corpus over time. Invest a fixed amount every month and watch your savings grow with the power of compounding.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold font-headline mb-4">A Habit of Savings for a Brighter Future</h2>
            <p className="text-muted-foreground mb-6">
              A Recurring Deposit (RD) is a special term deposit that allows you to invest a fixed amount every month for a predetermined period. It's an excellent tool for those who want to save regularly for a specific goal, like a child's education, a wedding, or a down payment on a home. With attractive interest rates and the benefit of compounding, our RD scheme helps you reach your financial milestones with ease.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Start Saving Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="order-1 md:order-2">
            {rdImage && (
              <Image
                src={rdImage.imageUrl}
                alt={rdImage.description}
                data-ai-hint={rdImage.imageHint}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            )}
          </div>
        </div>

        <div className="my-16 md:my-24">
            <h2 className="text-3xl font-bold font-headline text-center mb-12">Features & Benefits</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="text-center">
                    <CardHeader>
                        <CardTitle className="text-lg">Regular Savings</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Fosters a disciplined saving habit with fixed monthly installments.</p>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardHeader>
                        <CardTitle className="text-lg">Power of Compounding</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Earn interest on your interest, helping your money grow faster over time.</p>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardHeader>
                        <CardTitle className="text-lg">Goal-Oriented</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Ideal for achieving short-term or long-term financial goals with a clear plan.</p>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardHeader>
                        <CardTitle className="text-lg">Flexible Tenure</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Choose a tenure that aligns with your financial objectives, from 1 to 10 years.</p>
                    </CardContent>
                </Card>
                 <Card className="text-center">
                    <CardHeader>
                        <CardTitle className="text-lg">Loan Facility</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Avail a loan of up to 90% against your RD balance for urgent financial needs.</p>
                    </CardContent>
                </Card>
                 <Card className="text-center">
                    <CardHeader>
                        <CardTitle className="text-lg">Guaranteed Returns</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Enjoy fixed, predictable returns on your investment, free from market volatility.</p>
                    </CardContent>
                </Card>
            </div>
        </div>

        <div className="my-16 md:my-24">
          <h2 className="text-3xl font-bold font-headline text-center mb-12">Recurring Deposit Interest Rates</h2>
          <Card className="max-w-4xl mx-auto shadow-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold">Period</TableHead>
                  <TableHead className="font-semibold text-center">Rate of Interest (p.a.) for General Public</TableHead>
                  <TableHead className="font-semibold text-center">Rate of Interest (p.a.) for Senior Citizen</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {interestRates.map((rate) => (
                  <TableRow key={rate.period}>
                    <TableCell className="font-medium">{rate.period}</TableCell>
                    <TableCell className="text-center">{rate.general}</TableCell>
                    <TableCell className="text-center">{rate.senior}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <CardContent>
                <p className="text-xs text-muted-foreground pt-4">* Interest will be calculated on yearly basis. Senior citizen benefits available for members above 60 years of age.</p>
            </CardContent>
          </Card>
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
                            <span>Must be a member of Jan Vikas Kalyan Society.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span>An individual who is 18 years of age or older.</span>
                        </li>
                         <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span>A minor can open an account with a legal guardian.</span>
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
                            <span>Duly filled Recurring Deposit application form.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span>Valid Identity Proof (Aadhaar Card, PAN Card, etc.).</span>
                        </li>
                         <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span>Valid Address Proof (Passport, Driving License, etc.).</span>
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </div>

      </div>
    </div>
  );
}
