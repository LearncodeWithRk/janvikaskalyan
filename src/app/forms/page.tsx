
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import Link from "next/link";

const documents = [
  {
    title: "Society Bye-Laws",
    description: "The official rules and regulations governing the Jan Vikas Kalyan Co-operative Thrift & Credit Society Limited.",
    link: "https://janvikaskalyan.com/wp-content/uploads/2020/11/JAN-VIKAS-KALYAN-CO-OPERATIVE-THRIFT-CREDIT-SOCIETY-LTD.pdf"
  }
];

export default function FormsPage() {
  return (
    <div className="bg-background">
       <section className="py-20 md:py-32 text-primary-foreground" style={{ backgroundColor: '#132440' }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Forms</h1>
          <p className="text-lg text-muted-foreground/80">Access important society documents.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl mx-auto">
          {documents.map((doc, index) => (
            <Card key={index} className="shadow-lg">
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <FileText className="h-8 w-8 text-primary" />
                        <CardTitle>{doc.title}</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <CardDescription className="mb-6">{doc.description}</CardDescription>
                    <Button asChild>
                        <Link href={doc.link} target="_blank" rel="noopener noreferrer">
                            <Download className="mr-2 h-4 w-4" />
                            Download PDF
                        </Link>
                    </Button>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
