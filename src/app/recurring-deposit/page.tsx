

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, UserCheck, ArrowRight, TrendingUp, User, IndianRupee, PiggyBank, AlertTriangle, Shield, Percent, XCircle } from "lucide-react";
import Link from "next/link";
import { getImage } from "@/lib/placeholder-images";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const maturityData = [
  { deposit: "1,000", year2: "26,667", year3: "42,812", year4: "61,835", year5: "90,000", year10: "2,80,000" },
  { deposit: "2,000", year2: "53,335", year3: "85,624", year4: "1,23,670", year5: "1,80,000", year10: "5,60,000" },
  { deposit: "3,000", year2: "80,002", year3: "1,28,436", year4: "1,85,505", year5: "2,70,000", year10: "8,40,000" },
  { deposit: "5,000", year2: "1,33,337", year3: "2,14,060", year4: "3,09,174", year5: "4,50,000", year10: "14,00,000" },
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
          <Card className="max-w-6xl mx-auto shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <Table className="min-w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold whitespace-nowrap px-4 py-3 text-center">Monthly Deposit</TableHead>
                    <TableHead className="font-semibold text-center whitespace-nowrap px-4 py-3">
                      After 2 years<br /><span className="text-xs font-normal opacity-85">10% Annual</span>
                    </TableHead>
                    <TableHead className="font-semibold text-center whitespace-nowrap px-4 py-3">
                      After 3 years<br /><span className="text-xs font-normal opacity-85">11% Annual</span>
                    </TableHead>
                    <TableHead className="font-semibold text-center whitespace-nowrap px-4 py-3">
                      After 4 years<br /><span className="text-xs font-normal opacity-85">12% Annual</span>
                    </TableHead>
                    <TableHead className="font-semibold text-center whitespace-nowrap px-4 py-3">
                      After 5 years<br /><span className="text-xs font-normal opacity-85">15% Annual</span>
                    </TableHead>
                    <TableHead className="font-semibold text-center whitespace-nowrap px-4 py-3">
                      After 10 years<br /><span className="text-xs font-normal opacity-85">15% Annual</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {maturityData.map((row) => (
                    <TableRow key={row.deposit}>
                      <TableCell className="font-medium text-center px-4 py-4">{row.deposit}</TableCell>
                      <TableCell className="text-center px-4 py-4">{row.year2}</TableCell>
                      <TableCell className="text-center px-4 py-4">{row.year3}</TableCell>
                      <TableCell className="text-center px-4 py-4">{row.year4}</TableCell>
                      <TableCell className="text-center px-4 py-4">{row.year5}</TableCell>
                      <TableCell className="text-center px-4 py-4">{row.year10}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
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
                        <IndianRupee className="h-8 w-8 text-primary" />
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
