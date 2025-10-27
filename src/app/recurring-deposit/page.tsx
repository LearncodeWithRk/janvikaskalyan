
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, UserCheck, ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";
import { getImage } from "@/lib/placeholder-images";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const maturityData = [
    { deposit: 500, year1: "6,300", year2: "13,500", year3: "22,100", year4: "33,000", year5: "45,000" },
    { deposit: 1000, year1: "12,601", year2: "27,000", year3: "44,200", year4: "66,000", year5: "90,000" },
    { deposit: 2000, year1: "25,202", year2: "54,000", year3: "88,400", year4: "132,000", year5: "180,000" },
    { deposit: 5000, year1: "63,005", year2: "135,000", year3: "221,000", year4: "330,000", year5: "450,000" },
];


export default function RecurringDepositPage() {
  const rdImage = getImage("recurring-deposit");

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Recurring Deposit (RD)</h1>
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
          <h2 className="text-3xl font-bold font-headline text-center mb-12">RD Maturity Amount Chart</h2>
          <Card className="max-w-6xl mx-auto shadow-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold">Deposit Per Month</TableHead>
                  <TableHead className="font-semibold text-center">After 1 Year (9% Annual)</TableHead>
                  <TableHead className="font-semibold text-center">After 2 Years (11% Annual)</TableHead>
                  <TableHead className="font-semibold text-center">After 3 Years (13% Annual)</TableHead>
                  <TableHead className="font-semibold text-center">After 4 Years (15% Annual)</TableHead>
                  <TableHead className="font-semibold text-center">After 5 Years (15% Annual)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {maturityData.map((row) => (
                  <TableRow key={row.deposit}>
                    <TableCell className="font-medium text-center">{row.deposit.toLocaleString()}</TableCell>
                    <TableCell className="text-center">{row.year1}</TableCell>
                    <TableCell className="text-center">{row.year2}</TableCell>
                    <TableCell className="text-center">{row.year3}</TableCell>
                    <TableCell className="text-center">{row.year4}</TableCell>
                    <TableCell className="text-center">{row.year5}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
             <CardContent>
                <p className="text-xs text-muted-foreground pt-4">* This is an example, actual returns may vary.</p>
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
