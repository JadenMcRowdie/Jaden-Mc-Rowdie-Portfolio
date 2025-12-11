import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Github, Linkedin, ArrowRight } from "lucide-react";

const ResumeLinks = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Angled top */}
      <div 
        className="absolute top-0 left-0 right-0 h-20 bg-background" 
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 100%)' }} 
      />
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10 pt-8">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Let's connect
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Resume & Links
            </h2>
            <p className="text-muted-foreground text-lg">
              Download my resume or connect with me on professional platforms
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-6" />
          </div>
          
          {/* Links Grid */}
          <div className="grid sm:grid-cols-3 gap-6">
            {/* Resume Card */}
            <Card className="creative-card bg-gradient-to-br from-primary to-primary-dark text-primary-foreground border-0 rounded-2xl overflow-hidden group">
              <CardContent className="p-8 flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">Resume</h3>
                <p className="text-primary-foreground/80 mb-6 text-sm flex-grow">
                  Download my full CV with detailed experience
                </p>
                <Button 
                  size="lg" 
                  asChild 
                  className="w-full bg-white text-primary hover:bg-white/90 rounded-xl group/btn"
                >
                  <a href="/Jaden_Mc_Rowdie_CV.pdf" download="Jaden_Mc_Rowdie_CV.pdf">
                    Download
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            {/* LinkedIn Card */}
            <Card className="creative-card bg-card border-0 rounded-2xl overflow-hidden group sm:translate-y-4">
              <CardContent className="p-8 flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 bg-[#0077B5]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Linkedin className="w-8 h-8 text-[#0077B5]" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">LinkedIn</h3>
                <p className="text-muted-foreground mb-6 text-sm flex-grow">
                  Connect with me professionally
                </p>
                <Button 
                  size="lg" 
                  variant="outline" 
                  asChild 
                  className="w-full rounded-xl border-2 hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] transition-all duration-300 group/btn"
                >
                  <a 
                    href="https://www.linkedin.com/in/jaden-mc-rowdie-953888238/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Connect
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            {/* GitHub Card */}
            <Card className="creative-card bg-card border-0 rounded-2xl overflow-hidden group">
              <CardContent className="p-8 flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 bg-foreground/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Github className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">GitHub</h3>
                <p className="text-muted-foreground mb-6 text-sm flex-grow">
                  Explore my code repositories
                </p>
                <Button 
                  size="lg" 
                  variant="outline" 
                  asChild 
                  className="w-full rounded-xl border-2 hover:bg-foreground hover:text-background transition-all duration-300 group/btn"
                >
                  <a 
                    href="https://github.com/JadenMcRowdie" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Code
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeLinks;