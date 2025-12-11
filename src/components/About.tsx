import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Get to know me
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          </div>
          
          {/* Asymmetric layout */}
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Main content - larger column */}
            <div className="lg:col-span-3 space-y-6">
              <Card className="creative-card bg-card border-0 rounded-2xl overflow-hidden">
                <CardContent className="p-8 md:p-10">
                  <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
                    <p className="text-xl text-foreground">
                      Hello! I'm <span className="text-primary font-semibold">Jaden Mc Rowdie</span>, a recent Bachelor of IT in Business Systems graduate with a passion for leveraging technology to drive business innovation and efficiency.
                    </p>
                    
                    <p>
                      My academic journey has equipped me with a strong foundation in both technical skills and business acumen. I specialize in bridging the gap between technology and business objectives, with particular interests in <span className="text-accent font-medium">AI/ML applications</span>, data analytics, and business systems optimization.
                    </p>
                    
                    <p>
                      I'm eager to bring fresh perspectives, a strong work ethic, and a commitment to continuous learning to a forward-thinking team. Let's connect and explore how I can contribute to your organization's success.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Side cards - smaller column with stagger */}
            <div className="lg:col-span-2 space-y-6">
              {/* Career Objective Card */}
              <Card className="creative-card bg-gradient-to-br from-primary to-primary-dark text-primary-foreground border-0 rounded-2xl overflow-hidden lg:translate-y-8">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <Target className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-xl font-bold">Career Objective</h3>
                  </div>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    Seeking opportunities as a Business Systems Analyst or IT Professional where I can apply my technical expertise and analytical mindset to solve complex business challenges.
                  </p>
                </CardContent>
              </Card>

              {/* Values Cards */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="creative-card bg-card border-0 rounded-2xl">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Lightbulb className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-foreground">Innovation</h4>
                    <p className="text-sm text-muted-foreground mt-1">Fresh perspectives</p>
                  </CardContent>
                </Card>
                
                <Card className="creative-card bg-card border-0 rounded-2xl">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground">Growth</h4>
                    <p className="text-sm text-muted-foreground mt-1">Continuous learning</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;