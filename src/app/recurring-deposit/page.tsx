
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, UserCheck, ArrowRight, TrendingUp, User, CircleDollarSign, PiggyBank, AlertTriangle, Shield, Percent, XCircle } from "lucide-react";
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
      <section className="py-20 md:py-32 text-primary-foreground" style={{ backgroundColor: '#132440' }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Recurring Deposit (RD)</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:py-24">
        
        <div className="my-12">
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
            </CardContent>
          </Card>
        </div>

        <div className="my-16 md:my-24">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                        <User className="h-8 w-8 text-primary" />
                        <CardTitle className="text-lg">ELIGIBILITY</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2 text-muted-foreground">
                           <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0"/><span>The applicant must be a member of the Society.</span></li>
                           <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0"/><span>For Society membership related information <Link href="/join" className="text-primary underline">visit here</Link>.</span></li>
                        </ul>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                        <CircleDollarSign className="h-8 w-8 text-primary" />
                        <CardTitle className="text-lg">MINIMUM DEPOSIT AMOUNT</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Rs. 500/- and further in multiple of Rs. 100/-</p>
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
                <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                        <AlertTriangle className="h-8 w-8 text-primary" />
                        <CardTitle className="text-lg">PREMATURE PAYMENT</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Premature Payment guideline shall be applicable as per Society’s Terms & Condition.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                        <Shield className="h-8 w-8 text-primary" />
                        <CardTitle className="text-lg">SPECIAL FEATURES</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start"><XCircle className="h-5 w-5 text-destructive mr-2 mt-1 shrink-0"/> No TDS is applicable on the interest earned on deposits.</li>
                            <li className="flex items-start"><Percent className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0"/> Offers higher interest rates.</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>

      </div>
    </div>
  );
}
