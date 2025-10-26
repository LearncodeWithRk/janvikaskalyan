import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const resources = [
  {
    title: "Ministry of Rural Development",
    description: "Official government portal for rural development schemes and information.",
    link: "https://rural.nic.in/",
  },
  {
    title: "National Health Mission",
    description: "Central government initiative for accessible and affordable healthcare.",
    link: "https://nhm.gov.in/",
  },
  {
    title: "Pratham Education Foundation",
    description: "An innovative learning organization created to improve the quality of education in India.",
    link: "https://www.pratham.org/",
  },
  {
    title: "GiveIndia Foundation",
    description: "India's largest and most trustworthy giving platform for donors.",
    link: "https://www.giveindia.org/",
  },
  {
    title: "World Health Organization (WHO) - India",
    description: "Country office of WHO, providing leadership on global health matters in India.",
    link: "https://www.who.int/india",
  },
  {
    title: "UNICEF India",
    description: "Working to ensure that every child gets a fair chance in life.",
    link: "https://www.unicef.org/india/",
  },
];

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold font-headline text-center mb-4">External Resources</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        A curated list of relevant government portals, partner organizations, and useful websites.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource) => (
          <Card key={resource.title} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="font-headline">{resource.title}</CardTitle>
              <CardDescription>{resource.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow" />
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href={resource.link} target="_blank" rel="noopener noreferrer">
                  Visit Site <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
