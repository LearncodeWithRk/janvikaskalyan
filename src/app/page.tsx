
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { getImage, ImagePlaceholder } from '@/lib/placeholder-images';
import { ArrowRight, Users, PiggyBank, Landmark, UserPlus, ChevronLeft, ChevronRight, HandCoins } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

const heroSlides = [
  {
    title: "Celebrating To Become More Than 30,000 + Members",
    description: "Established more than 11 years",
    image: getImage('cooperative-meeting'),
    buttonText: "Become a member",
    buttonLink: "/join",
    bgColor: "#f0f4ff",
    textColor: "#0d244f",
  },
  {
    title: "Saving Deposit",
    description: "बचत पर अतिरिक्त Return of Investment पाने के लिए , सिर्फ एक क्लिक में अपना Saving Deposit Account खुलवाएं",
    image: getImage('saving-deposit'),
    buttonText: "सम्पर्क करें",
    buttonLink: "/contact",
    bgColor: "#e8f5e9",
    textColor: "#1b5e20",
  },
  {
    title: "Loan",
    description: "आपके विकास के लिए हमेशा तत्पर , सदस्यों के लिए आसानी से लोन की सुविधा",
    image: getImage('loan-against-deposit'),
    buttonText: "सम्पर्क करें",
    buttonLink: "/contact",
    bgColor: "#fff8e1",
    textColor: "#f57f17",
  }
];

function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const stickyPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollableHeight = container.scrollHeight - window.innerHeight;
      const stepHeight = scrollableHeight / heroSlides.length;
      const newActiveIndex = Math.min(
        heroSlides.length - 1,
        Math.floor(container.scrollTop / stepHeight)
      );
      setActiveIndex(newActiveIndex);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const dynamicStyles = {
    backgroundColor: heroSlides[activeIndex].bgColor,
    color: heroSlides[activeIndex].textColor,
    transition: 'background-color 0.7s ease, color 0.7s ease',
  };

  const gridPatternStyle = {
    '--grid-color': 'rgba(0, 0, 0, 0.05)',
    backgroundImage: `
      linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
      linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)
    `,
    backgroundSize: '3.5rem 3.5rem',
  };

  return (
    <div
      ref={scrollContainerRef}
      className="h-[85vh] w-full overflow-y-auto"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <div style={{ height: `${heroSlides.length * 100}vh` }}>
        <div ref={stickyPanelRef} className="sticky top-0 h-[85vh] w-full flex flex-col items-center justify-center" style={dynamicStyles}>
          <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full max-w-7xl mx-auto">

            {/* Left Column: Text Content, Pagination & Button */}
            <div className="relative flex flex-col justify-center p-8 md:p-16 border-r border-black/10">
              {/* Pagination Bars */}
              <div className="absolute top-8 left-8 md:top-16 md:left-16 flex space-x-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      const container = scrollContainerRef.current;
                      if (container) {
                        const scrollableHeight = container.scrollHeight - window.innerHeight;
                        const stepHeight = scrollableHeight / heroSlides.length;
                        container.scrollTo({ top: stepHeight * index, behavior: 'smooth' });
                      }
                    }}
                    className={`h-1 rounded-full transition-all duration-500 ease-in-out ${
                      index === activeIndex ? 'w-12 bg-black/80' : 'w-6 bg-black/20'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <div className="relative h-64 w-full">
                {heroSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === activeIndex
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                    }`}
                  >
                    <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">{slide.title}</h2>
                    <p className="mt-6 text-lg md:text-xl max-w-md">{slide.description}</p>
                  </div>
                ))}
              </div>

              {/* Get Started Button */}
              <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16">
                 <Link href={heroSlides[activeIndex].buttonLink}>
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      {heroSlides[activeIndex].buttonText}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
              </div>
            </div>

            {/* Right Column: Image Content with Grid Background */}
            <div className="hidden md:flex items-center justify-center p-8" style={gridPatternStyle}>
              <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden shadow-2xl border-4 border-black/5">
                <div
                  className="absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateY(-${activeIndex * 100}%)` }}
                >
                  {heroSlides.map((slide, index) => (
                    <div key={index} className="w-full h-full">
                      {slide.image &&
                        <Image
                          src={slide.image.imageUrl}
                          alt={slide.title}
                          className="h-full w-full object-cover"
                          width={800}
                          height={1200}
                          priority={index === 0}
                          unoptimized
                        />
                      }
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const products = [
    { title: "Recurring Deposit", description: "Build a corpus with small, regular monthly investments.", icon: Users, href: "/recurring-deposit" },
    { title: "Fixed Deposit", description: "Grow your savings with attractive, fixed interest rates.", icon: PiggyBank, href: "/fixed-deposit" },
    { title: "Saving Account", description: "Flexible savings account for your daily needs with interest.", icon: HandCoins, href: "/saving-deposit" },
    { title: "Loan", description: "Member-centric loan facilities to cater to your diverse financial needs.", icon: Landmark, href: "/loans" },
  ];

  const galleryImages = ['gallery1', 'gallery2', 'gallery3', 'gallery4'].map(id => getImage(id)).filter((img): img is ImagePlaceholder => !!img);
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


  return (
    <div className="flex flex-col bg-background">
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] bg-primary/10">
        <HeroSlider />
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
            {galleryImages.map((image, index) => (
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
