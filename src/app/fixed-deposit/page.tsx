
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FileText, UserCheck, Shield, PiggyBank, BadgePercent, AlertTriangle, User, CircleDollarSign, Percent, XCircle } from "lucide-react";
import Link from "next/link";
import { getImage } from "@/lib/placeholder-images";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const maturityData = [
    { deposit: "10,000", days90: "10,300", year1: "11,146", year2: "12,424", year3: "13,848", year6: "20,000" },
    { deposit: "50,000", days90: "51,500", year1: "55,730", year2: "62,120", year3: "69,240", year6: "100,000" },
    { deposit: "100,000", days90: "103,000", year1: "111,460", year2: "124,240", year3: "138,480", year6: "200,000" },
    { deposit: "500,000", days90: "515,000", year1: "557,300", year2: "621,200", year3: "692,400", year6: "1,000,000" },
];


export default function FixedDepositPage() {
  const fdImage = getImage("fixed-deposit");

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Fixed Deposit (FD)</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold font-headline mb-4">अपनी राशि को मात्र 6 वर्ष 6 महीने में दोगुना करें</h2>
            <p className="text-muted-foreground text-lg mb-6">
              Note : Rate of Interest 12% Annual
            </p>
          </div>
          <div className="order-1 md:order-2">
            {fdImage && (
              <Image
                src={fdImage.imageUrl}
                alt={fdImage.description}
                data-ai-hint={fdImage.imageHint}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            )}
          </div>
        </div>
        
        <div className="my-16 md:my-24">
          <Card className="max-w-6xl mx-auto shadow-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold">Deposit Amount</TableHead>
                  <TableHead className="font-semibold text-center">After 90 days</TableHead>
                  <TableHead className="font-semibold text-center">After 1 Year</TableHead>
                  <TableHead className="font-semibold text-center">After 2 Years</TableHead>
                  <TableHead className="font-semibold text-center">After 3 Years</TableHead>
                  <TableHead className="font-semibold text-center">After 6 Years 6 Months</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {maturityData.map((row) => (
                  <TableRow key={row.deposit}>
                    <TableCell className="font-medium">{row.deposit}</TableCell>
                    <TableCell className="text-center">{row.days90}</TableCell>
                    <TableCell className="text-center">{row.year1}</TableCell>
                    <TableCell className="text-center">{row.year2}</TableCell>
                    <TableCell className="text-center">{row.year3}</TableCell>
                    <TableCell className="text-center">{row.year6}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
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
                        <p className="text-muted-foreground">The applicant must be a member of the Society. For Society membership related information <Link href="/join" className="text-primary underline"></Link>.</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                        <CircleDollarSign className="h-8 w-8 text-primary" />
                        <CardTitle className="text-lg">MINIMUM DEPOSIT AMOUNT</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Rs. 5000/-</p>
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
                        <BadgePercent className="h-8 w-8 text-primary" />
                        <CardTitle className="text-lg">LOAN FACILITY</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Maximum up to 80% against Deposit Amount. Interest Rate (Reducing) 3% extra.</p>
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
