import { Button } from "@/components/ui/button";
import {  Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; 

const HeroSection = () => {


  return (
    <section id="home" className="flex items-center justify-center relative overflow-hidden py-16 md:py-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                أهلا،أنا{" "}
                <span className="gradient-text">
                  أسماء ضياء
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground">
                معلمة اللغة العربية للأطفال
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                أقدم دروسًا تفاعلية وممتعة لتعليم اللغة العربية للأطفال، 
                مع التركيز على تطوير مهارات القراءة والكتابة والتحدث.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground hero-glow bounce-transition hover:scale-105"
              >
                <a href="/Asmaa_Diaa_Cv.pdf" download>
                  Download CV
                </a>
              </Button>

              
              <Button 
                variant="outline" 
                size="lg"
                className="border-border hover:bg-muted smooth-transition"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">

              <Button variant="ghost" size="icon" className="hover:text-primary smooth-transition">
               <a
                 href="https://wa.me/201067997895?text=مرحبًا، أريد معرفة المزيد عن خدماتك"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <FaWhatsapp className="w-6 h-6 text-green-500 hover:text-green-600 transition-colors" />
               </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary smooth-transition">
                 <a
                         href="mailto:Asmaadiaa2710@gmail.com"
                         className="hover:text-red-500"
                       >
                         <Mail className="w-5 h-5" />
                   </a>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-in-left">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute -inset-1 bg-gradient-hero rounded-lg blur opacity-75 animate-glow"></div>
              <img 
                // src={heroPortrait}
                alt="Asmaa Diaa"
                className="relative w-full h-auto rounded-lg shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;