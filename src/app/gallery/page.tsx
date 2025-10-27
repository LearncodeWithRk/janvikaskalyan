"use client";

import Image from "next/image";
import { useState } from "react";
import { getImage, ImagePlaceholder } from "@/lib/placeholder-images";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryPage() {
  const galleryImages = [
    'gallery1', 
    'gallery2', 
    'gallery3', 
    'gallery4',
    'gallery5',
    'gallery6'
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

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Our Gallery</h1>
        <p className="text-lg text-muted-foreground">
          A glimpse into the community and events at Jan Vikas Kalyan Society.
        </p>
      </div>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {galleryImages.map((image, index) => (
          <div 
            key={index} 
            className="overflow-hidden rounded-lg shadow-md break-inside-avoid cursor-pointer" 
            onClick={() => setSelectedImageIndex(index)}
          >
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
