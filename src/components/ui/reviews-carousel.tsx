import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const ReviewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      image: "/images/WhatsApp Image 2025-08-13 at 6.57.28 PM (1).jpeg",
      rating: 5,
    },
    {
      id: 2,
      image: "/images/WhatsApp Image 2025-08-13 at 6.57.28 PM.jpeg",
      rating: 5,
    },
    {
      id: 3,
      image: "/images/WhatsApp Image 2025-08-13 at 6.57.29 PM.jpeg",
      rating: 5,
    },
    {
      id: 4,
      image: "/images/WhatsApp Image 2025-08-13 at 6.57.30 PM.jpeg",
      rating: 5,
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="reviews" className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            رأي <span className="gradient-text">الطلاب وأولياء الأمور</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            إليك بعض من آراء طلابي وأولياء الأمور حول تجربتهم في تعلم اللغة العربية معي. 
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0">
                  <Card className="bg-card border-border mx-4">
                    <CardContent className="p-8 lg:p-12">
                      <div className="text-center">
                        {/* Quote Icon */}
                        <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-50" />
                        
                        {/* Rating */}
                        <div className="flex justify-center mb-6">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                          ))}
                        </div>

                        {/* Reviewer Image (full, not circle) */}
                        <div className="flex items-center justify-center">
                          <img 
                            src={review.image}
                            alt="review"
                            className="max-w-xs w-full h-64 object-contain border-2 border-primary/20 rounded-lg"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background hover:bg-muted border-border"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background hover:bg-muted border-border"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
