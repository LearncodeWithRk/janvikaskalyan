import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, FileText } from "lucide-react";

const documents = [
  {
    title: "Membership Application Form",
    description: "Download the form to apply for membership with the society.",
    fileUrl: "/placeholder.pdf",
    fileName: "JVK_Membership_Form.pdf",
  },
  {
    title: "Loan Application Form",
    description: "Application form for Personal, Emergency, or Loan Against Deposit.",
    fileUrl: "/placeholder.pdf",
    fileName: "JVK_Loan_Application.pdf",
  },
  {
    title: "Society Bye-Laws",
    description: "The official rules and regulations governing the society.",
    fileUrl: "https://janvikaskalyan.com/wp-content/uploads/2020/11/JAN-VIKAS-KALYAN-CO-OPERATIVE-THRIFT-CREDIT-SOCIETY-LTD.pdf",
    fileName: "JAN-VIKAS-KALYAN-CO-OPERATIVE-THRIFT-CREDIT-SOCIETY-LTD.pdf",
  },
  {
    title: "Annual Report 2023",
    description: "A comprehensive overview of our financial performance in 2023.",
    fileUrl: "/placeholder.pdf",
    fileName: "JVK_Annual_Report_2023.pdf",
  },
];

export default function DocumentsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold font-headline text-center mb-4">Forms &amp; Documents</h1>
        <p className="text-center text-muted-foreground mb-12">
          Access important forms, reports, and official documents from Jan Vikas Kalyan Society.
        </p>
        <div className="border rounded-lg bg-card shadow-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead className="hidden md:table-cell">Description</TableHead>
                <TableHead className="text-right">Download</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documents.map((doc) => (
                <TableRow key={doc.title}>
                  <TableCell className="font-medium flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary/80" />
                    {doc.title}
                  </TableCell>
                  <TableCell className="text-muted-foreground hidden md:table-cell">{doc.description}</TableCell>
                  <TableCell className="text-right">
                    <Button asChild variant="ghost" size="icon">
                      <a href={doc.fileUrl} download={doc.fileName} target="_blank" rel="noopener noreferrer">
                        <Download className="h-5 w-5" />
                        <span className="sr-only">Download {doc.title}</span>
                      </a>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
