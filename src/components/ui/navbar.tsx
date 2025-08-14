import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Asmaa_Diaa_Cv.pdf'; 
    link.download = 'Asmaa_Diaa_Cv.pdf';
    link.click();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text">
            Portfolio
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-muted-foreground hover:text-foreground smooth-transition"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-foreground smooth-transition"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="text-muted-foreground hover:text-foreground smooth-transition"
            >
              Reviews
            </button>
          </div>

          <Button 
            onClick={downloadCV}
            variant="default"
            className="bg-primary hover:bg-primary/90 text-primary-foreground hero-glow"
          >
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;