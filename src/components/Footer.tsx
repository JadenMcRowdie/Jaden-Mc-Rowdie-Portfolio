import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-primary-dark" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      {/* Angled top */}
      <div 
        className="absolute top-0 left-0 right-0 h-20 bg-background" 
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }} 
      />
      
      <div className="relative z-10 pt-20 pb-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            {/* Logo/Name */}
            <h3 className="font-display text-3xl font-bold text-white mb-2">
              Jaden Mc Rowdie
            </h3>
            <p className="text-white/70 mb-8 max-w-md">
              Business Systems Analyst & IT Professional passionate about leveraging technology for business innovation
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mb-12">
              <a
                href="mailto:jadenmcrowdie@gmail.com"
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 hover:-translate-y-1"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/jaden-mc-rowdie-953888238/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-[#0077B5] rounded-xl flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/JadenMcRowdie"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
            
            {/* Divider */}
            <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />
            
            {/* Copyright */}
            <p className="text-white/50 text-sm flex items-center gap-2">
              Made with <Heart className="h-4 w-4 text-accent fill-accent" /> 
              <span>&copy; {new Date().getFullYear()} Jaden Mc Rowdie. All rights reserved.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;