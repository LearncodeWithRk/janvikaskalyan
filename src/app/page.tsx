import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getImage } from '@/lib/placeholder-images';
import { ArrowRight, Eye, Goal, HeartHandshake, Users } from 'lucide-react';

export default function Home() {
  const heroImage = getImage('hero');
  const galleryImages = ['gallery1', 'gallery2', 'gallery3', 'gallery4'].map(id => getImage(id));

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full">
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
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4">
            Empowering Communities, Changing Lives
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mb-8">
            Jan Vikas Kalyan is dedicated to fostering sustainable development and social equity through community-led initiatives.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Get Involved <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <Card className="shadow-lg">
              <CardHeader className="flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Goal className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl font-headline">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To empower marginalized communities through integrated programs in education, health, and livelihood, ensuring a life of dignity and self-reliance for all.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardHeader className="flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl font-headline">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We envision a just, equitable, and sustainable society where every individual has the opportunity to realize their full potential and contribute to the collective good.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 md:py-24 bg-card">
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
      <section className="py-16 md:py-24 bg-background">
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
