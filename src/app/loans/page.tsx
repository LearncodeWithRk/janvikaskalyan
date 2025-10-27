
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getImage } from '@/lib/placeholder-images';

const loanTypes = [
  {
    id: "personal-loan-hero",
    title: "Personal / Regular Loan",
    description: "Meet your planned expenses, from home renovations to family weddings, with our member-friendly Personal Loans. Enjoy a straightforward process with competitive interest rates.",
    features: [
      "Simple and transparent application process.",
      "Quick eligibility assessment for members.",
      "Flexible repayment options.",
      "No hidden charges.",
    ],
    href: "/personal-loan",
  },
  {
    id: "emergency-loan",
    title: "Emergency Loan",
    description: "For unexpected financial needs, our Emergency Loan provides quick access to funds. Whether it's a medical urgency or an unforeseen expense, we're here to support you without delay.",
    features: [
      "Rapid processing for urgent requirements.",
      "Minimal documentation.",
      "Special consideration for our members in need.",
      "Immediate financial relief.",
    ],
    href: "/emergency-loan"
  },
  {
    id: "loan-against-deposit",
    title: "Loan Against Deposit",
    description: "Leverage your existing Fixed or Recurring Deposits to secure a loan. This allows you to get liquidity without breaking your investment, at a lower interest rate.",
    features: [
      "Lower interest rates compared to other loans.",
      "No need for additional collateral.",
      "Continue earning interest on your deposit.",
      "Quick and hassle-free disbursal.",
    ],
    href: "/contact"
  },
];

export default function LoansPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Loan Facilities for Members</h1>
        <p className="text-lg text-muted-foreground">
          As a valued member of Jan Vikas Kalyan, you have exclusive access to a variety of loan products designed to be simple, fast, and supportive of your financial journey.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {loanTypes.map((loan) => {
          const image = getImage(loan.id);
          return (
            <Card id={loan.id} key={loan.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow scroll-mt-20">
               {image && (
                   <Image
                    src={image.imageUrl}
                    alt={image.description}
                    data-ai-hint={image.imageHint}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                )}
              <CardHeader>
                <CardTitle className="text-2xl font-headline">{loan.title}</CardTitle>
                <CardDescription className="pt-2">{loan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {loan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild className="w-full">
                  <Link href={loan.href}>{loan.id === 'loan-against-deposit' ? 'Enquire Now' : 'Learn More'}</Link>
                </Button>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  );
}
