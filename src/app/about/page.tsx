import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Landmark, Calendar, FileText, ArrowRight, Group, TrendingUp, Target, Heart, Check, Zap, Handshake, Users, Shield } from 'lucide-react';
import { getImage } from '@/lib/placeholder-images';

export default function AboutPage() {
  const aboutImage = getImage('team-photo');
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">About Jan Vikas Kalyan Society</h1>
            <p className="text-lg text-muted-foreground">
              Your trusted partner in financial growth and community empowerment since 2015.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center my-16">
          <div>
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                data-ai-hint={aboutImage.imageHint}
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            )}
          </div>
          <div>
            <h2 className="text-3xl font-bold font-headline mb-4">Our History</h2>
            <p className="text-muted-foreground mb-4">
              Jan Vikas Kalyan Co-operative Thrift &amp; Credit Society Ltd. was founded with a singular mission: to foster a culture of saving and financial self-reliance among our members. We began our journey on March 13, 2015, after being officially registered under the Delhi Co-operative Societies (DCS) Act of 2013.
            </p>
            <p className="text-muted-foreground mb-6">
              Our operations are supervised by the Registrar of Co-operative Societies, Government of N.C.T. of Delhi. The society operates based on co-operative principles and is managed by a team of experienced professionals dedicated to serving our members' interests.
            </p>
             <Card className="bg-secondary/50 border-primary/20">
                <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                        <FileText className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <p className="font-semibold">Registration No: <span className="font-normal">10358/3TC/2015</span></p>
                            <p className="font-semibold">Established: <span className="font-normal">March 13, 2015</span></p>
                        </div>
                    </div>
                </CardContent>
             </Card>
          </div>
        </div>

        <div className="my-16 md:my-24">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="flex-row items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                    <Target className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-3xl font-headline">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                    To provide our members with secure, fair, and accessible financial services, promoting thrift, and enabling them to achieve their financial goals through mutual cooperation.
                    </p>
                </CardContent>
                </Card>
                <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="flex-row items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                    <TrendingUp className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-3xl font-headline">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                    To be the leading co-operative society in Delhi, recognized for our commitment to member prosperity, financial stability, and community development.
                    </p>
                </CardContent>
                </Card>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start my-16 md:my-24">
            <div>
                <h2 className="text-3xl font-bold font-headline mb-6 text-center md:text-left">Our Core Values</h2>
                <ul className="space-y-4">
                    <li className="flex items-center gap-4">
                        <Heart className="h-6 w-6 text-accent" />
                        <span className="font-medium text-lg">Member-Centric Approach</span>
                    </li>
                    <li className="flex items-center gap-4">
                        <Shield className="h-6 w-6 text-accent" />
                        <span className="font-medium text-lg">Integrity and Transparency</span>
                    </li>
                    <li className="flex items-center gap-4">
                        <Users className="h-6 w-6 text-accent" />
                        <span className="font-medium text-lg">Community and Collaboration</span>
                    </li>
                    <li className="flex items-center gap-4">
                        <TrendingUp className="h-6 w-6 text-accent" />
                        <span className="font-medium text-lg">Sustainable Growth</span>
                    </li>
                </ul>
            </div>
             <div>
                <h2 className="text-3xl font-bold font-headline mb-6 text-center md:text-left">Our Features</h2>
                <ul className="space-y-4">
                    <li className="flex items-center gap-4">
                        <Check className="h-6 w-6 text-green-500" />
                        <span className="text-muted-foreground">Governed by DCS Act, 2013 for full legal compliance.</span>
                    </li>
                    <li className="flex items-center gap-4">
                        <Check className="h-6 w-6 text-green-500" />
                        <span className="text-muted-foreground">Democratic governance with power in members' hands.</span>
                    </li>
                    <li className="flex items-center gap-4">
                        <Check className="h-6 w-6 text-green-500" />
                        <span className="text-muted-foreground">A wide range of deposit and loan products.</span>
                    </li>
                    <li className="flex items-center gap-4">
                        <Check className="h-6 w-6 text-green-500" />
                        <span className="text-muted-foreground">Services available to all members, regardless of their background.</span>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}
