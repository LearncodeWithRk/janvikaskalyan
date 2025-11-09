
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { getImage, ImagePlaceholder } from '@/lib/placeholder-images';
import { ArrowRight, Users, PiggyBank, Landmark, UserPlus, ChevronLeft, ChevronRight, HandCoins } from 'lucide-react';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
    image: getImage('personal-loan-hero'),
    buttonText: "सम्पर्क करें",
    buttonLink: "/contact",
  }
];

export default function HomePage() {
  const products = [
    { title: "Recurring Deposit", description: "Recurring Deposit (RD) is a product where members have to deposit the installment every month, to get a cumulative return …", icon: Users, href: "/recurring-deposit" },
    { title: "Fixed Deposit", description: "Give your portfolio stability of returns and safety and liquidity. Invest in FIXED DEPOSIT. We offer attractive returns…", icon: PiggyBank, href: "/fixed-deposit" },
    { title: "Saving Account", description: "It is a kind of Scheme similar to the SAVING ACCOUNTS. Offers Interest rates @6% p.a. Anytime deposit and Anytime Withdrawal…", icon: HandCoins, href: "/saving-deposit" },
    { title: "Loan", description: "A trusted and member-centric, one-stop financial services provider, Jan Vikas Kalyan caters to the diverse financial needs of …", icon: Landmark, href: "/emergency-loan" },
  ];

  const galleryImages = [
    'gallery1', 
    'gallery2', 
    'gallery3', 
    'gallery4', 
    'gallery5', 
    'gallery6',
    'gallery7',
    'gallery8'
  ].map(id => getImage(id)).filter((img): img is ImagePlaceholder => !!img);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => (prevIndex === null ? 0 : (prevIndex + 1) % galleryImages.length));
    }
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => (prevIndex === null ? 0 : (prevIndex - 1 + galleryImages.length) % galleryImages.length));
    }
  };

  const selectedImage = selectedImageIndex !== null ? galleryImages[selectedImageIndex] : null;

  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    setCurrent(carouselApi.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(carouselApi.selectedScrollSnap());
    };

    carouselApi.on("select", onSelect);
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  const onDotClick = useCallback((index: number) => {
    carouselApi?.scrollTo(index);
  }, [carouselApi]);

  return (
    <div className="flex flex-col bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full">
        <Carousel 
          setApi={setCarouselApi}
          className="w-full h-full" 
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[60vh] md:h-[70vh] w-full">
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
                  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center text-primary-foreground p-4">
                    <h1 className="text-3xl md:text-6xl font-bold font-headline mb-4 animate-fade-in-down">{slide.title}</h1>
                    <p className="text-md md:text-xl mb-8 max-w-2xl animate-fade-in-up">{slide.description}</p>
                    <Button size="lg" asChild>
                      <Link href={slide.buttonLink}>{slide.buttonText}</Link>
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/20 hover:bg-white/40" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/20 hover:bg-white/40" />
           <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => onDotClick(index)}
                className={cn(
                  "h-3 w-3 rounded-full transition-colors",
                  current === index ? "bg-white" : "bg-white/50"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </section>


      {/* About Us Section */}
       <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">About Us</h2>
              <p className="text-muted-foreground mb-6">
                Jan Vikas Kalyan Co-operative Thrift & Credit Society Limited (hence forth referred to as Jan Vikas Kalyan or the Society) is a Thrift & Credit Cooperative Society registered under the Delhi Cooperative Society (DCS) Act 2013. The registration number of the Society is (10358/Sec-3/TC/2015). The Society was registered with the Registrar of Cooperative Societies, Delhi on 13th of March 2015.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link key={product.title} href={product.href} className="group">
                <Card className="flex flex-col h-full p-6 text-left shadow-md hover:shadow-xl transition-all duration-300 border-transparent hover:border-primary/50 bg-card">
                  <CardHeader className="p-0 mb-4">
                    <div className="mb-4 bg-primary/10 text-primary p-3 rounded-lg w-fit">
                      <product.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="font-headline text-xl">{product.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 flex-grow">
                    <p className="text-muted-foreground text-sm">{product.description}</p>
                  </CardContent>
                  <CardFooter className="p-0 mt-6">
                    <div className="flex items-center text-sm font-semibold text-primary">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardFooter>
                </Card>
              </Link>
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
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {galleryImages.slice(0, 8).map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md break-inside-avoid cursor-pointer" onClick={() => setSelectedImageIndex(index)}>
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  data-ai-hint={image.imageHint}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
           <div className="text-center mt-12">
              <Button asChild variant="outline">
                <Link href="/gallery">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
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

      <Dialog open={selectedImageIndex !== null} onOpenChange={() => setSelectedImageIndex(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-0 shadow-none">
          {selectedImage && (
            <>
              <DialogTitle className="sr-only">{selectedImage.description}</DialogTitle>
              <div className="relative">
                <Image
                  src={selectedImage.imageUrl}
                  alt={selectedImage.description}
                  width={1200}
                  height={800}
                  className="rounded-lg object-contain w-full h-auto max-h-[80vh]"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handlePrevImage}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white/50 hover:bg-white/80 text-black rounded-full h-10 w-10"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleNextImage}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white/50 hover:bg-white/80 text-black rounded-full h-10 w-10"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
