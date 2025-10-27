
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, UserCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getImage } from "@/lib/placeholder-images";

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
            <h2 className="text-3xl font-bold font-headline text-center mb-12">Features & Benefits</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="text-center">
                    <CardHeader>
                        <CardTitle className="text-lg">Assured Returns</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Enjoy guaranteed returns on your investment, unaffected by market fluctuations.</p>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardHeader>
                        <CardTitle className="text-lg">Flexible Tenure</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Choose from a wide range of tenure options to match your financial goals.</p>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardHeader>
                        <CardTitle className="text-lg">Loan Facility</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Get a loan of up to 90% against your fixed deposit in case of emergencies.</p>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardHeader>
                        <CardTitle className="text-lg">Competitive Interest</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">We offer attractive interest rates to maximize the growth of your savings.</p>
                    </CardContent>
                </Card>
                 <Card className="text-center">
                    <CardHeader>
                        <CardTitle className="text-lg">Nomination Facility</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Nominate a beneficiary to receive the funds in your absence.</p>
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
                            <span>Must be a member of Jan Vikas Kalyan Society.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span>An individual who has attained the age of 18 years.</span>
                        </li>
                         <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span>Can be opened in the name of a minor with a guardian.</span>
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
                            <span>Completed Fixed Deposit application form.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span>Identity Proof (Aadhaar Card, PAN Card, etc.).</span>
                        </li>
                         <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span>Address Proof (Electricity Bill, Passport, etc.).</span>
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </div>

      </div>
    </div>
  );
}
