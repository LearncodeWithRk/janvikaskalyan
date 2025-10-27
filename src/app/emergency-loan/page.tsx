
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, UserCheck, ArrowRight, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { getImage } from "@/lib/placeholder-images";

export default function EmergencyLoanPage() {
  const emergencyLoanImage = getImage("emergency-loan");

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Emergency Loan</h1>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold font-headline mb-4">Immediate Support When You Need It Most</h2>
            <p className="text-muted-foreground mb-6">
              Life is unpredictable, and financial emergencies can arise without warning. Our Emergency Loan is specifically designed to provide our members with rapid financial assistance during times of crisis. We prioritize these applications to ensure you get the support you need as quickly as possible.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Enquire Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="order-1 md:order-2">
            {emergencyLoanImage && (
              <Image
                src={emergencyLoanImage.imageUrl}
                alt={emergencyLoanImage.description}
                data-ai-hint={emergencyLoanImage.imageHint}
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
                        <CardTitle className="text-lg">Rapid Processing</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Priority processing for urgent financial requirements.</p>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardHeader>
                        <CardTitle className="text-lg">Minimal Documentation</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">A streamlined process with minimal paperwork for quick disbursal.</p>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardHeader>
                        <CardTitle className="text-lg">Immediate Relief</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Provides immediate financial relief to handle unforeseen circumstances.</p>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardHeader>
                        <CardTitle className="text-lg">Member Focused</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Special consideration and support for our members in need.</p>
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
                            <span>Subject to the society's credit assessment and policies.</span>
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
                            <span>Completed Emergency Loan Application Form.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span>Proof of emergency (e.g., medical bills), if applicable.</span>
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
