
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { getImage } from '@/lib/placeholder-images';
import { ArrowRight, Users, PiggyBank, Landmark, UserPlus, CreditCard, Smartphone, Home, Car } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export default function HomePage() {
  const heroSlides = [
    {
      title: "Celebrating To Become More Than 30,000 + Members",
      description: "Established more than 11 years",
      image: getImage('cooperative-meeting'),
      buttonText: "Become a member",
      buttonLink: "/join",
    },
    {
      title: "Saving Deposit",
      description: "बचत पर अतिरिक्त Return of Investment पाने के लिए , सिर्फ एक क्लिक में अपना Saving Deposit Account खुलवाएं",
      image: getImage('saving-deposit'),
      buttonText: "सम्पर्क करें",
      buttonLink: "/contact",
    },
    {
      title: "Loan",
      description: "आपके विकास के लिए हमेशा तत्पर , सदस्यों के लिए आसानी से लोन की सुविधा",
      image: getImage('loan-against-deposit'),
      buttonText: "सम्पर्क करें",
      buttonLink: "/contact",
    }
  ];

  const quickLinks = [
    { label: "Open an Account", icon: UserPlus, href: "/join" },
    { label: "Apply for a Loan", icon: Landmark, href: "/loans" },
    { label: "Credit Cards", icon: CreditCard, href: "/plans" },
    { label: "Mobile Banking", icon: Smartphone, href: "/contact" },
  ];

  const products = [
    { title: "Fixed Deposit", description: "Grow your savings with attractive, fixed interest rates.", icon: PiggyBank, href: "/plans#fixed-deposit" },
    { title: "Recurring Deposit", description: "Build a corpus with small, regular monthly investments.", icon: Users, href: "/plans#recurring-deposit" },
    { title: "Saving Deposit", description: "Flexible savings account for your daily needs with interest.", icon: Home, href: "/plans#saving-deposit" },
    { title: "Compulsory Deposit", description: "A mandatory saving plan for members to foster thrift.", icon: Car, href: "/plans#compulsory-deposit" },
  ];

  const galleryImages = ['gallery1', 'gallery2', 'gallery3', 'gallery4'].map(id => getImage(id));

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

      {/* About Us Section */}
       <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">About Us</h2>
              <p className="text-muted-foreground mb-6">
                Established on March 13, 2015, Jan Vikas Kalyan Co-operative Society is registered under the DCS Act 2013 (Reg. No. 10358/3TC/2015). We are committed to the financial empowerment of our members through a culture of savings and mutual support.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-primary">30,000+</p>
                  <p className="text-sm text-muted-foreground">Members</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">11+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">24/7</p>
                  <p className="text-sm text-muted-foreground">Team Support</p>
                </div>
              </div>
            </div>
            {getImage('team-photo') &&
              <div className="hidden md:block">
                  <Image src={getImage('team-photo')!.imageUrl} alt="Jan Vikas Kalyan Team" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="professional team"/>
              </div>
            }
          </div>
        </div>
      </section>

      {/* Our Plans Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-left mb-12">
             <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Plans</h2>
          </div>
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

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
           <div className="text-left mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Gallery</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              image && 
              <div key={index} className="overflow-hidden rounded-lg shadow-md">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  data-ai-hint={image.imageHint}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform"
                />
              </div>
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
