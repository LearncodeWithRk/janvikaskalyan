
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getImage } from '@/lib/placeholder-images';
import { ArrowRight, Users, PiggyBank, Handshake, Landmark, Phone, Mail, ShieldCheck, TrendingUp, UserPlus, FileText, Smartphone, CreditCard, Home, Car } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export default function Home() {
  const galleryImages = ['gallery1', 'gallery2', 'gallery3', 'gallery4'].map(id => getImage(id));

  const heroSlides = [
    {
      title: "Digital Banking at Your Fingertips",
      description: "Securely manage your finances anytime, anywhere. Open accounts, transfer funds, and pay bills with ease.",
      image: getImage('digital-banking'),
      buttonText: "Explore Digital Services",
      buttonLink: "/plans",
    },
    {
      title: "Your Financial Goals, Our Priority",
      description: "Achieve your dreams with our tailored loan and investment solutions. Let's build your future together.",
      image: getImage('gallery4'),
      buttonText: "View Loan Options",
      buttonLink: "/loans",
    },
    {
      title: "Trusted by Millions, Built for You",
      description: "Join a community that values security, growth, and customer satisfaction above all else.",
      image: getImage('cooperative-meeting'),
      buttonText: "Become a Member",
      buttonLink: "/join",
    }
  ];

  const quickLinks = [
    { label: "Open an Account", icon: UserPlus, href: "/join" },
    { label: "Apply for a Loan", icon: Landmark, href: "/loans" },
    { label: "Credit Cards", icon: CreditCard, href: "/plans" },
    { label: "Mobile Banking", icon: Smartphone, href: "/contact" },
  ];

  const products = [
    { title: "Savings Accounts", description: "Competitive interest rates and features to help your money grow.", icon: PiggyBank, href: "/plans#saving-deposit" },
    { title: "Home Loans", description: "Turn your dream of owning a home into a reality with our flexible financing.", icon: Home, href: "/loans" },
    { title: "Personal Loans", description: "Fund your needs, from vacations to weddings, with our easy loan process.", icon: Users, href: "/loans#personal-loan" },
    { title: "Car Loans", description: "Get behind the wheel of your new car with our attractive loan options.", icon: Car, href: "/loans" },
  ];

  return (
    <div className="flex flex-col bg-background">
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] bg-primary/10">
        <Carousel
          opts={{ loop: true }}
          className="w-full h-full"
        >
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full h-[85vh]">
                  {slide.image && (
                    <Image
                      src={slide.image.imageUrl}
                      alt={slide.image.description}
                      data-ai-hint={slide.image.imageHint}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-end text-center text-white pb-20 md:pb-24">
                    <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4 drop-shadow-lg">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mb-8 drop-shadow-md">
                      {slide.description}
                    </p>
                    <Link href={slide.buttonLink}>
                      <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        {slide.buttonText}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/30 hover:bg-black/50 border-none" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/30 hover:bg-black/50 border-none" />
        </Carousel>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link) => (
              <Link key={link.label} href={link.href} className="group">
                <Card className="text-center hover:bg-primary/5 hover:border-primary/50 transition-all">
                  <CardContent className="p-6 flex flex-col items-center justify-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <link.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <p className="font-semibold text-sm md:text-base">{link.label}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-12 text-center">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card key={product.title} className="flex flex-col text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    <product.icon className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="font-headline mt-4">{product.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{product.description}</p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button asChild variant="outline" className="w-full">
                    <Link href={product.href}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Join Us CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-8">Ready to Get Started?</h2>
          <p className="max-w-2xl mx-auto text-primary-foreground/80 mb-8">
            Join thousands of satisfied customers and take control of your financial future. 
            Opening an account is simple and takes just a few minutes.
          </p>
          <Link href="/join">
            <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <UserPlus className="mr-2 h-5 w-5" /> Open an Account
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
}
