
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, UserCheck, ArrowRight, Shield, BadgePercent } from "lucide-react";
import Link from "next/link";
import { getImage } from "@/lib/placeholder-images";

export default function LoanAgainstDepositPage() {
  const loanImage = getImage("loan-against-deposit");

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 text-primary-foreground" style={{ backgroundColor: '#132440' }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Loan Against Deposit</h1>
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
                        <p className="text-muted-foreground">3% p.a. extra (Reducing Balance on Loan against FD/RD)</p>
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
                            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /> Must produce the FD Certificate (in case of Loan against FD).</li>
                            <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" /> Must produce the original documents in case of Loan against Deposit.</li>
                        </ul>
                    </CardContent>
                </Card>
                 <Card className="md:col-span-2">
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
            </div>
        </div>

      </div>
    </div>
  );
}
