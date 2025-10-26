
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getImage } from '@/lib/placeholder-images';
import { ArrowRight, Users, PiggyBank, Handshake, Landmark, Phone, Mail, ShieldCheck, TrendingUp, UserPlus, FileText } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export default function Home() {
  const galleryImages = ['gallery1', 'gallery2', 'gallery3', 'gallery4'].map(id => getImage(id));

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
      image: getImage('gallery3'),
      buttonText: "सम्पर्क करें",
      buttonLink: "/contact",
    },
    {
      title: "Loan",
      description: "आपके विकास के लिए हमेशा तत्पर , सदस्यों के लिए आसानी से लोन की सुविधा",
      image: getImage('gallery4'),
      buttonText: "सम्पर्क करें",
      buttonLink: "/contact",
    }
  ];

  return (
    <div className="flex flex-col">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
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
                        {slide.buttonLink === '/join' && <ArrowRight className="ml-2 h-5 w-5" />}
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

      {/* About Us Snippet Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">About us</h2>
                    <p className="text-muted-foreground mb-6">
                        Jan Vikas Kalyan Co-operative Thrift & Credit Society Limited (henceforth referred to as Jan Vikas Kalyan or the Society) is a Thrift & Credit Cooperative Society registered under the Delhi Cooperative Society (DCS) Act 2013. The registration number of the Society is (10358/Sec-3/TC/2015). The Society was registered with the Registrar of Cooperative Societies, Delhi on 13th of March 2015.
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
                      <p className="text-3xl font-bold">11+ Years</p>
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
            <Card className="flex flex-col text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  <FileText className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">Fixed Deposit</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">Grow your savings with attractive, fixed interest rates.</p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/plans">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  <PiggyBank className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">Recurring Deposit</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">Build a corpus with small, regular monthly investments.</p>
              </CardContent>
               <CardFooter className="pt-0">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/plans">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  <Landmark className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">Saving Deposit</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">Flexible savings account for your daily needs with interest.</p>
              </CardContent>
               <CardFooter className="pt-0">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/plans">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  <ShieldCheck className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">Compulsory Deposit</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">A mandatory saving plan for members to foster thrift.</p>
              </CardContent>
               <CardFooter className="pt-0">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/plans">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Join Us CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-8">अब ज्यादा होगी बचत , जब मिलेगा ज्यादा Return of Investment.</h2>
          <Link href="/join">
            <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <UserPlus className="mr-2 h-5 w-5" /> Become a member
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

    
    

    