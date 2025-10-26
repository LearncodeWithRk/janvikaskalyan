
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { FileText, Users, TrendingUp, Clock, Shield, Handshake } from 'lucide-react';
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
            <h2 className="text-3xl font-bold font-headline mb-4">Our History & Commitment</h2>
            <p className="text-muted-foreground mb-4">
              Jan Vikas Kalyan Co-operative Thrift &amp; Credit Society Ltd. was founded with a singular mission: to foster a culture of saving and financial self-reliance among our members. We began our journey on March 13, 2015, after being officially registered under the Delhi Co-operative Societies (DCS) Act of 2003.
            </p>
            <p className="text-muted-foreground mb-6">
              With over 30,000 happy members, our operations are supervised by the Registrar of Co-operative Societies, Government of N.C.T. of Delhi. The society operates on co-operative principles and is managed by a team of experienced professionals dedicated to serving our members' interests with transparency and integrity.
            </p>
             <Card className="bg-secondary/50 border-primary/20">
                <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                        <FileText className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <p className="font-semibold">Registration No: <span className="font-normal">10358/Sec-3/TC/2015</span></p>
                            <p className="font-semibold">Established: <span className="font-normal">March 13, 2015</span></p>
                        </div>
                    </div>
                </CardContent>
             </Card>
          </div>
        </div>

        <div className="my-16 md:my-24 bg-card p-8 md:p-12 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold font-headline text-center mb-8">अध्यक्ष के विचार (Message from the Chairman)</h2>
          <blockquote className="text-center text-muted-foreground italic text-lg max-w-3xl mx-auto">
            <p>"हम सभी लोग अपने घर से दूर एक दूसरे शहर में रह रहे हैं, जहाँ हम अपने बच्चो के लिए बेहतर भविष्य की तलाश कर रहे हैं। लेकिन इन सभी अवसरों को हासिल करने के लिए हमें अपनों कें साथ की आवश्कता होती हैं, लेकिन इस अनजान शहर में आर्थिक , सामाजिक साथ कहीं खो सा गया हैं, और जब जब मेने यह सोचा तब मुझे सभी के जीवन में अपनों की कमी और आर्थिक तंगी का एहसास हुआ जिसने मुझे झिंझोर दिया और संस्था की नींव रखने के लिए मजबूर कर दिया।"</p>
            <p className="mt-4">"आज हम 11 वर्षो के अनुभव के साथ अपने 30,000+ के परिवार का निर्माण कर चुके हैं जहाँ पर सभी एक दूसरे के सहयोग से विकास के लिए तत्पर हैं। 11 वर्षो की यात्रा आसान नहीं थी और शायद आगे भी न हो लेकिन में एक बात जानता हूँ की जब तक आप लोगो का साथ मेरे साथ हैं, हम सभी लोग विकास करते रहेंगे।"</p>
          </blockquote>
          <p className="text-center font-bold font-headline mt-6 text-xl">विकास तिवारी (Vikas Tiwari)</p>
        </div>

        <div className="my-16 md:my-24 text-center">
            <h2 className="text-3xl font-bold font-headline mb-12">संस्था की उपलब्धि (Our Achievements)</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                        <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                            <Users className="h-10 w-10 text-primary" />
                        </div>
                        <CardTitle className="font-headline text-3xl">30,000+</CardTitle>
                        <p className="text-muted-foreground">Members</p>
                    </CardHeader>
                </Card>
                 <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                        <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                            <TrendingUp className="h-10 w-10 text-primary" />
                        </div>
                        <CardTitle className="font-headline text-3xl">11+</CardTitle>
                        <p className="text-muted-foreground">Years Experience</p>
                    </CardHeader>
                </Card>
                <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                        <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                            <Clock className="h-10 w-10 text-primary" />
                        </div>
                        <CardTitle className="font-headline text-3xl">24/7</CardTitle>
                        <p className="text-muted-foreground">Team Support</p>
                    </CardHeader>
                </Card>
            </div>
        </div>

        <div className="my-16 md:my-24 text-center">
            <h2 className="text-3xl font-bold font-headline mb-12">Our Core Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                        <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                            <Shield className="h-10 w-10 text-primary" />
                        </div>
                        <CardTitle className="font-headline text-xl">Legal Compliance</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Governed by the DCS Act, 2003 for full security of your funds.</p>
                    </CardContent>
                </Card>
                 <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                        <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                            <Users className="h-10 w-10 text-primary" />
                        </div>
                        <CardTitle className="font-headline text-xl">Democratic Governance</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Power rests in the hands of our members, ensuring fairness for all.</p>
                    </CardContent>
                </Card>
                <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                        <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                            <Handshake className="h-10 w-10 text-primary" />
                        </div>
                        <CardTitle className="font-headline text-xl">Inclusive Services</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Tailored deposit and loan products are available to all our members.</p>
                    </CardContent>
                </Card>
            </div>
        </div>

        <div className="text-center mt-16 border-t pt-12">
            <h3 className="text-2xl font-headline mb-4">Join Our Community</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">At Jan Vikas Kalyan, we don’t just manage money — we nurture trust, stability, and community growth. Become a part of our journey today.</p>
            <Button asChild size="lg">
                <Link href="/join">Become a Member</Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
