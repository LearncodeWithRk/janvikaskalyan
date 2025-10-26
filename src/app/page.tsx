"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getImage } from '@/lib/placeholder-images';
import { ArrowRight, Users, HeartHandshake, BookOpenCheck, HeartPulse, Briefcase, HandHeart } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export default function Home() {
  const heroImage = getImage('hero');
  const heroImage2 = getImage('hero2');
  const heroImage3 = getImage('hero3');
  const galleryImages = ['gallery1', 'gallery2', 'gallery3', 'gallery4'].map(id => getImage(id));

  const heroSlides = [
    {
      image: heroImage,
      title: 'Empowering Communities, Changing Lives',
      description: 'Jan Vikas Kalyan is dedicated to fostering sustainable development and social equity through community-led initiatives.',
      buttonText: 'Get Involved',
      buttonLink: '/contact',
    },
    {
      image: heroImage2,
      title: 'Education for Every Child',
      description: 'Join us in our mission to provide quality education and a brighter future for underprivileged children.',
      buttonText: 'Learn More',
      buttonLink: '/documents',
    },
    {
      image: heroImage3,
      title: 'A Healthy Community is a Strong Community',
      description: 'Support our health programs that bring essential medical care to remote areas.',
      buttonText: 'Donate Now',
      buttonLink: '/contact',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full">
        <Carousel className="w-full" opts={{ loop: true }}>
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
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mb-8">
                      {slide.description}
                    </p>
                    <Link href={slide.buttonLink}>
                      <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        {slide.buttonText} <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
        </Carousel>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  <BookOpenCheck className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">Education Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Providing quality education and learning resources for underprivileged children and adults.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  <HeartPulse className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">Healthcare Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Organizing medical camps and health awareness programs in remote and underserved areas.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  <Briefcase className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">Livelihood Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Empowering individuals with vocational training and skill development for sustainable income.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">Community Building</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Fostering strong community bonds through cultural events, workshops, and social initiatives.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Ready to Make a Difference?</h2>
          <p className="max-w-2xl mx-auto text-primary-foreground/90 mb-8">
            Your support can change lives. Join us in our mission to create a better tomorrow.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Users className="mr-2 h-5 w-5" /> Get Involved
              </Button>
            </Link>
            <Link href="/contact">
               <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <HandHeart className="mr-2 h-5 w-5" /> Donate Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Our Impact</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mb-12">
            Through dedicated efforts and your support, we've made a significant difference.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-accent mb-4" />
              <p className="text-4xl font-bold">10,000+</p>
              <p className="text-muted-foreground">Lives Touched</p>
            </div>
            <div className="flex flex-col items-center">
              <HeartHandshake className="h-12 w-12 text-accent mb-4" />
              <p className="text-4xl font-bold">50+</p>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-accent mb-4" />
              <p className="text-4xl font-bold">500+</p>
              <p className="text-muted-foreground">Active Volunteers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">Our Activities</h2>
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
