
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { FileText, Users, TrendingUp, Clock } from 'lucide-react';
import { getImage } from '@/lib/placeholder-images';

export default function AboutPage() {
  const aboutImage = getImage('team-photo');
  const certificateImage = getImage('registration-certificate');
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
            <h2 className="text-3xl font-bold font-headline mb-4">अध्यक्ष के विचार</h2>
            <p className="text-muted-foreground mb-4">
              हम सभी लोग अपने घर से दूर एक दूसरे शहर में रह रहे हैं, जहाँ हम अपने बच्चो के लिए बेहतर भविष्य की तलाश कर रहे हैं। लेकिन इन सभी अवसरों को हासिल करने के लिए हमें अपनों कें साथ की आवश्कता होती हैं, लेकिन इस अनजान शहर में आर्थिक , सामाजिक साथ कहीं खो सा गया हैं, और जब जब मेने यह सोचा तब मुझे सभी के जीवन में अपनों की कमी और आर्थिक तंगी का एहसास हुआ जिसने मुझे झिंझोर दिया और संस्था की नींव रखने के लिए मजबूर कर दिया।
            </p>
            <p className="text-muted-foreground mb-6">
              आज हम 11 वर्षो के अनुभव के साथ अपने 30,000+ के परिवार का निर्माण कर चुके हैं जहाँ पर सभी एक दूसरे के सहयोग से विकास के लिए तत्पर हैं। 11 वर्षो की यात्रा आसान नहीं थी और शायद आगे भी न हो लेकिन में एक बात जानता हूँ की जब तक आप लोगो का साथ मेरे साथ हैं, हम सभी लोग विकास करते रहेंगे।
            </p>
          </div>
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
            <div className="mt-16 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold font-headline mb-8">Registration Certificate</h2>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2">
                    <div className="p-6 flex flex-col justify-center">
                        <div className="flex items-start gap-4">
                            <FileText className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                            <p className="text-muted-foreground">
                              Jan Vikas Kalyan Co-operative Thrift & Credit Society Limited (henceforth referred to as Jan Vikas Kalyan or the Society) is a Thrift & Credit Cooperative Society registered under the Delhi Cooperative Society (DCS) Act 2013. The registration number of the Society is (10358/Sec-3/TC/2015). The Society was registered with the Registrar of Cooperative Societies, Delhi on 13th of March 2015.
                            </p>
                        </div>
                    </div>
                    {certificateImage && (
                       <div className="bg-muted">
                         <Image
                          src={certificateImage.imageUrl}
                          alt={certificateImage.description}
                          data-ai-hint={certificateImage.imageHint}
                          width={600}
                          height={800}
                          className="w-full h-auto object-cover"
                        />
                       </div>
                    )}
                  </div>
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
