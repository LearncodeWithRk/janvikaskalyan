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
    // In a real app, you would send this data to your backend.
    // For this demo, we'll simulate a successful submission.
    console.log(values);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you shortly.",
    });

    // On successful "submission", redirect to a thank you page.
    router.push("/thank-you");
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold font-headline text-center mb-4">Get In Touch</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Have questions or want to get involved? Send us a message or find our contact details below.
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
                          <Input placeholder="Regarding volunteering" {...field} />
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
                    {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2 space-y-6">
          <h3 className="text-2xl font-semibold font-headline">Contact Information</h3>
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold">Our Office</h4>
              <p className="text-muted-foreground">123 Welfare Lane, Development City, Nation 12345</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold">Email Us</h4>
              <p className="text-muted-foreground">contact@janvikaskalyan.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold">Call Us</h4>
              <p className="text-muted-foreground">(123) 456-7890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
