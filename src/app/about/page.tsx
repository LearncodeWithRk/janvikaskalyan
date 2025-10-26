import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, Goal } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">About Us</h1>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-4xl mx-auto">
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
    </div>
  );
}
