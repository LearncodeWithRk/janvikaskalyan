import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download } from "lucide-react";

const documents = [
  {
    title: "Annual Report 2023",
    description: "A comprehensive overview of our activities, achievements, and financial performance in 2023.",
    fileUrl: "/placeholder.pdf",
    fileName: "JVK_Annual_Report_2023.pdf",
  },
  {
    title: "Our Mission Statement",
    description: "The core principles and goals that guide our organization.",
    fileUrl: "/placeholder.pdf",
    fileName: "JVK_Mission_Statement.pdf",
  },
  {
    title: "Volunteer Handbook",
    description: "Essential information and guidelines for all our volunteers.",
    fileUrl: "/placeholder.pdf",
    fileName: "JVK_Volunteer_Handbook.pdf",
  },
  {
    title: "Project Impact Study - Education",
    description: "An in-depth analysis of our educational initiatives' impact on local communities.",
    fileUrl: "/placeholder.pdf",
    fileName: "JVK_Impact_Study_Education.pdf",
  },
];

export default function DocumentsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold font-headline text-center mb-4">Document Repository</h1>
        <p className="text-center text-muted-foreground mb-12">
          Access important documents, reports, and publications from Jan Vikas Kalyan.
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
                  <TableCell className="font-medium">{doc.title}</TableCell>
                  <TableCell className="text-muted-foreground hidden md:table-cell">{doc.description}</TableCell>
                  <TableCell className="text-right">
                    <Button asChild variant="ghost" size="icon">
                      <a href={doc.fileUrl} download={doc.fileName}>
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
