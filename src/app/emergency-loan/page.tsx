
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, UserCheck, ArrowRight, AlertTriangle, BadgePercent, Shield, Clock } from "lucide-react";
import Link from "next/link";
import { getImage } from "@/lib/placeholder-images";

export default function EmergencyLoanPage() {
  const emergencyLoanImage = getImage("emergency-loan");

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 text-primary-foreground" style={{ backgroundColor: '#132440' }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Emergency Loan</h1>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:py-24">

        <div className="my-16 md:my-24">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                        <BadgePercent className="h-8 w-8 text-primary" />
                        <CardTitle className="text-lg">INTEREST</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">18% p.a. (1.5% p.m.) Reducing Balance</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                        <Shield className="h-8 w-8 text-primary" />
                        <CardTitle className="text-lg">CONDITIONS</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /> Must be a Member of the society.</li>
                            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /> Minimum 3 Months Membership Required.</li>
                            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /> 1 Guarantor (Guarantor shall be the existing member of the society and should not be a defaulter)</li>
                        </ul>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                        <FileText className="h-8 w-8 text-primary" />
                        <CardTitle className="text-lg">DOCUMENTS REQUIRED</CardTitle>
                    </CardHeader>
                    <CardContent>
                       <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /> Photo Id Proof (Any like Voter ID Card, Aadhaar Card, Pan Card etc.)</li>
                            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /> Address Proof (Water/Electricity bill, Compulsory)</li>
                            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /> Rent Agreement (In case of Tenant and Electricity/Water Bill of the Landlord)</li>
                            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /> 1 Latest Passport Size Photo.</li>
                             <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /> 1 A/c Payee Cheque (CTS Cheque)</li>
                        </ul>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                        <Clock className="h-8 w-8 text-primary" />
                        <CardTitle className="text-lg">LOAN TENURE & CHARGES</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /> Loan Tenure will be max. of 12 months (1 year)</li>
                            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /> Non-payment of the installment on Due date will incur 3% penalty interest extra to the member.</li>
                             <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /> Loan processing charges shall be applicable.</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>

      </div>
    </div>
  );
}
