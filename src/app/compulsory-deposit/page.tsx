
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, UserCheck, ArrowRight, Lock } from "lucide-react";
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="text-center">
                    <CardHeader>
                        <CardTitle className="text-lg">Financial Discipline</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Instills a strong and regular saving habit, which is fundamental to financial health.</p>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardHeader>
                        <CardTitle className="text-lg">Guaranteed Savings Pool</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Builds a guaranteed savings corpus over time, creating a reliable financial cushion.</p>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardHeader>
                        <CardTitle className="text-lg">Membership Benefit</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">An exclusive benefit that directly contributes to the member's financial security.</p>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardHeader>
                        <CardTitle className="text-lg">Collective Strength</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Your savings contribute to the society's financial strength, helping fellow members.</p>
                    </CardContent>
                </Card>
                 <Card className="text-center">
                    <CardHeader>
                        <CardTitle className="text-lg">Loan Eligibility</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">A consistent compulsory deposit record can improve eligibility for future loans.</p>
                    </CardContent>
                </Card>
                 <Card className="text-center">
                    <CardHeader>
                        <CardTitle className="text-lg">Future Security</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Provides a foundational safety net, ensuring peace of mind for you and your family.</p>
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
                            <span>This is a mandatory deposit scheme for all members of the Jan Vikas Kalyan Society.</span>
                        </li>
                         <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span>To learn more about becoming a member, <Link href="/join" className="text-primary underline">visit our membership page</Link>.</span>
                        </li>
                    </ul>
                </CardContent>
            </Card>
            <Card className="shadow-lg">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <FileText className="h-8 w-8 text-primary" />
                        <CardTitle className="text-2xl font-headline">Process</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                     <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span>The deposit amount is determined at the time of membership enrollment.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span>Deposits are collected on a regular, predetermined schedule (e.g., monthly).</span>
                        </li>
                         <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span>Transactions are recorded in the member's passbook for full transparency.</span>
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </div>

      </div>
    </div>
  );
}
