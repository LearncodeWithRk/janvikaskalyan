
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { Mail, Phone, MapPin } from "lucide-react";

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
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactPage() {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const mailtoLink = `mailto:Janvikaskalyan200@gmail.com?subject=${encodeURIComponent(
      values.subject
    )}&body=${encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`
    )}`;
    
    // This will open the user's default email client
    window.location.href = mailtoLink;

    toast({
      title: "Redirecting to your email client...",
      description: "Please send the email from your mail application.",
    });
    
    // We don't reset the form so the user can copy the content if needed
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold font-headline text-center mb-4">Get In Touch</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Have questions about our plans, loans, or membership? We're here to help.
      </p>

      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-3">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
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
                          <Input placeholder="john.doe@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Question about Fixed Deposits" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Your message here..." className="min-h-[120px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Redirecting..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2 space-y-8">
          <h3 className="text-2xl font-semibold font-headline">Contact Information</h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-muted-foreground">Janvikaskalyan200@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Mobile No</h4>
                <p className="text-muted-foreground">+91 9625380067</p>
                <p className="text-muted-foreground">+91 9205437299</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                <h4 className="font-semibold">Working Offices</h4>
                <ul className="text-muted-foreground space-y-2 mt-1 list-disc pl-5">
                    <li>B6 , First Floor , Main Road , Aali Extension , New Delhi – 110076</li>
                    <li>30 No.,DSIDC Shed, Scheme 3 , Near Dharma Kanta , Okhla Phase -II , 110020</li>
                    <li>A-29, Gali No.-1, Jaitpur Extn., Part-2, Near NTPC Ground, Badarpur, New Delhi-110044</li>
                    <li>E-86A, Mangal Bazar Road, Sangam Vihar,New Delhi-80</li>
                    <li>H.No. 1287, Phase-III, J.J. Colony, Madanpur Khadar, New Delhi-76</li>
                </ul>
                </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Registered Office</h4>
                <p className="text-muted-foreground">F-42 , Ground Floor , Bhim Colony , Aali Vihar , New Delhi – 110044</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
