
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, UserCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getImage } from "@/lib/placeholder-images";

export default function PersonalLoanPage() {
  const personalLoanImage = getImage("personal-loan-hero");

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Personal / Regular Loan</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold font-headline mb-4">Funding for Your Life's Important Moments</h2>
            <p className="text-muted-foreground mb-6">
              Whether you're planning a home renovation, a family wedding, your child's education, or any other significant life event, our Personal Loan is designed to provide the financial support you need. As a member of Jan Vikas Kalyan, you benefit from a simple, transparent process tailored to your needs.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Enquire Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="order-1 md:order-2">
            {personalLoanImage && (
              <Image
                src={personalLoanImage.imageUrl}
                alt={personalLoanImage.description}
                data-ai-hint={personalLoanImage.imageHint}
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
                        <CardTitle className="text-lg">Simple Process</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">An easy and transparent application process designed for our members.</p>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardHeader>
                        <CardTitle className="text-lg">Quick Assessment</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Fast eligibility checks to get you the funds you need sooner.</p>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardHeader>
                        <CardTitle className="text-lg">Flexible Repayment</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Choose from various repayment options that fit your financial situation.</p>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardHeader>
                        <CardTitle className="text-lg">No Hidden Charges</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">We believe in full transparency, so you won't find any unexpected fees.</p>
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
                            <span>Consistent record of savings with the society.</span>
                        </li>
                         <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span>Fulfillment of KYC documentation norms.</span>
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
                            <span>Completed Loan Application Form.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span>Identity and Address Proof.</span>
                        </li>
                         <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span>Latest salary slips or income proof.</span>
                        </li>
                         <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span>Any other documents as required by the society.</span>
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </div>

      </div>
    </div>
  );
}
