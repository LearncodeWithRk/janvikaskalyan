"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getImage } from '@/lib/placeholder-images';
import { ArrowRight, Users, PiggyBank, Handshake, Landmark, Phone, Mail, ShieldCheck, TrendingUp, UserPlus, FileText } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export default function Home() {
  const heroImage = getImage('cooperative-meeting');
  const galleryImages = ['gallery1', 'gallery2', 'gallery3', 'gallery4'].map(id => getImage(id));

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] bg-primary/10">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4">
            Your Personal Bank
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mb-8">
            Empowering over 30,000+ members with savings, deposits, and easy loans.
          </p>
          <Link href="/join">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Become a Member <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* About Us Snippet Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">A Legacy of Trust &amp; Growth</h2>
                    <p className="text-muted-foreground mb-6">
                        Established on March 13, 2015, Jan Vikas Kalyan Co-operative Society is registered under the DCS Act 2013 (Reg. No. 10358/3TC/2015). We are committed to the financial empowerment of our members through a culture of savings and mutual support.
                    </p>
                    <Link href="/about">
                      <Button variant="outline" className="text-primary border-primary hover:bg-primary/10">
                        Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <Card className="text-center bg-secondary/50">
                    <CardHeader>
                      <ShieldCheck className="h-10 w-10 text-primary mx-auto mb-2" />
                      <p className="text-3xl font-bold">30,000+</p>
                      <p className="text-muted-foreground">Happy Members</p>
                    </CardHeader>
                  </Card>
                   <Card className="text-center bg-secondary/50">
                    <CardHeader>
                      <TrendingUp className="h-10 w-10 text-primary mx-auto mb-2" />
                      <p className="text-3xl font-bold">9+ Years</p>
                      <p className="text-muted-foreground">Of Service</p>
                    </CardHeader>
                  </Card>
                </div>
            </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">Our Financial Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  <FileText className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">Fixed Deposit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Grow your savings with attractive, fixed interest rates.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  <PiggyBank className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">Recurring Deposit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Build a corpus with small, regular monthly investments.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  <Landmark className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">Saving Deposit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Flexible savings account for your daily needs with interest.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  <ShieldCheck className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">Compulsory Deposit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">A mandatory saving plan for members to foster thrift.</p>
              </CardContent>
            </Card>
          </div>
           <div className="text-center mt-12">
            <Link href="/plans">
              <Button size="lg">Explore All Plans <ArrowRight className="ml-2 h-5 w-5" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Loans Section */}
       <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Easy &amp; Accessible Loans for Members</h2>
            <p className="text-muted-foreground mb-12">
              As a member, you get access to a variety of loans with a simple application process and quick eligibility checks. We offer Personal Loans, Emergency Loans, and Loans Against Your Deposit to meet your financial needs.
            </p>
            <Link href="/loans">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Learn About Loans <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Join Us CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Join Our Growing Family</h2>
          <p className="max-w-2xl mx-auto text-primary-foreground/90 mb-8">
            Become a part of a thriving cooperative society and secure your financial future. Start your journey with us today.
          </p>
          <Link href="/join">
            <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <UserPlus className="mr-2 h-5 w-5" /> Join Us Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">Glimpses of Our Community</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((img, index) => img && (
              <div key={index} className="group overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={img.imageUrl}
                  alt={img.description}
                  data-ai-hint={img.imageHint}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
