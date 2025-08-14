import {  Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-background/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold gradient-text mb-2">أسماء ضياء</h3>
            <p className="text-muted-foreground">معلمة اللغة العربية للأطفال</p>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:text-primary smooth-transition">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary smooth-transition">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            <span className="mx-2">•</span> 
            © 2024 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;