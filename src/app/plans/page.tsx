import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { getImage } from '@/lib/placeholder-images';

const plans = [
  {
    id: "fixed-deposit",
    title: "Fixed Deposit (FD)",
    description: "Secure your future with our Fixed Deposit plan. Enjoy high, guaranteed returns on your investment over a fixed tenure. It's the perfect way to let your money grow without any market risks.",
    benefits: [
      "Attractive and assured interest rates.",
      "Flexible tenure options to suit your goals.",
      "Loan facility available against your deposit.",
      "Safe and secure investment.",
    ],
  },
  {
    id: "recurring-deposit",
    title: "Recurring Deposit (RD)",
    description: "Discipline your savings with our Recurring Deposit plan. By investing a small, fixed amount every month, you can build a substantial savings corpus over time with the benefit of compounding interest.",
    benefits: [
      "Fosters a regular saving habit.",
      "Ideal for achieving long-term goals.",
      "Flexible monthly installment options.",
      "Competitive interest rates.",
    ],
  },
  {
    id: "saving-deposit",
    title: "Saving Deposit",
    description: "Our Saving Deposit account is designed for your day-to-day financial needs. It offers liquidity for your funds while also earning you interest on the balance maintained.",
    benefits: [
      "High liquidity for easy access to your money.",
      "Earn interest on your idle funds.",
      "No limit on the number of deposits.",
      "A safe place for your surplus cash.",
    ],
  },
  {
    id: "compulsory-deposit",
    title: "Compulsory Deposit",
    description: "A unique savings instrument exclusive to our members. This plan encourages mandatory savings, creating a disciplined financial approach and a safety net for the future.",
    benefits: [
      "Instills strong financial discipline.",
      "Builds a guaranteed savings pool.",
      "Contributes to the society's collective strength.",
      "Exclusive for Jan Vikas Kalyan members.",
    ],
  },
];

export default function PlansPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Our Financial Plans</h1>
        <p className="text-lg text-muted-foreground">
          Discover a range of savings and deposit schemes tailored to help you achieve your financial goals with security and confidence.
        </p>
      </div>

      <div className="space-y-16">
        {plans.map((plan) => {
          const image = getImage(plan.id);
          return (
            <Card id={plan.id} key={plan.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow grid md:grid-cols-2 items-center scroll-mt-20">
              <div className="p-8 order-2 md:order-1">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-3xl font-headline">{plan.title}</CardTitle>
                  <CardDescription className="text-base pt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-2 mb-6">
                    {plan.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </div>
               <div className="h-64 md:h-full w-full order-1 md:order-2">
                {image && (
                   <Image
                    src={image.imageUrl}
                    alt={image.description}
                    data-ai-hint={image.imageHint}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                )}
               </div>
            </Card>
          )
        })}
      </div>
    </div>
  );
}
