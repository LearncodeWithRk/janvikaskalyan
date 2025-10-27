"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Mail, Phone, User, CheckCircle, UserPlus, FileText, HelpCircle, Users, Check, Award, Shield } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
});

export default function JoinPage() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Request Submitted!",
      description: "Thank you for your interest. We will contact you shortly with membership details.",
    });

    form.reset();
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Become a Member Today</h1>
        <p className="text-lg text-muted-foreground">
          Join a community of over 30,000 members and take the first step towards a secure financial future.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl font-bold font-headline mb-4">Membership Information</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                    <div className="flex items-center gap-2">
                        <HelpCircle className="h-5 w-5 text-primary" /> Who can be a member?
                    </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Any person who has attained the age of 18 years, is capable of entering a valid contract, a member of a Hindu undivided family, a business, a company registered under the Companies Act, a partnership firm, a limited liability partnership firm, any trust, or institution can become a member of the Society.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                    <div className="flex items-center gap-2">
                         <UserPlus className="h-5 w-5 text-primary" /> How to join the society?
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4 text-muted-foreground">The application for membership shall be submitted by the applicant at any of the branches of the society, in the prescribed form with the following KYC documents:</p>
                  <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                    <li><strong>ID Proof:</strong> Voter ID card, Aadhar Card, PAN Card, etc.</li>
                    <li><strong>Address Proof:</strong> Electricity/Water Bill is compulsory.</li>
                    <li><strong>Rent Agreement:</strong> Required for tenants, along with the landlord's Electricity/Water bill.</li>
                    <li><strong>Photos:</strong> 2 latest passport-size photographs.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                     <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-primary" /> What are the benefits of joining?
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span>Offers higher interest rates on deposits compared to banks.</span>
                      </li>
                      <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span>No TDS is deducted on the interest earned on deposits.</span>
                      </li>
                      <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span>Access to a wide range of savings and deposit schemes.</span>
                      </li>
                      <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span>Hassle-free loan products with a simple application process.</span>
                      </li>
                      <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span>Full transparency in all operations and dealings.</span>
                      </li>
                      <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span>Professional, cooperative, and friendly staff to assist you.</span>
                      </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
             <Card className="mt-8 bg-secondary/50 border-primary/20">
                <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                        <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <p className="font-semibold text-sm">The right to accept/reject membership application/s are reserved with the Management of the society.</p>
                        </div>
                    </div>
                </CardContent>
             </Card>
        </div>

        <div>
          <Card className="shadow-lg">
             <CardHeader>
                <CardTitle className="text-2xl font-headline">Request Membership Information</CardTitle>
                <CardDescription>Fill out the form below and our team will get in touch with you.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="John Doe" {...field} className="pl-10" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                           <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="john.doe@example.com" {...field} className="pl-10" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="+91 98765 43210" {...field} className="pl-10" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Submitting..." : "Submit Request"}
                    <UserPlus className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
