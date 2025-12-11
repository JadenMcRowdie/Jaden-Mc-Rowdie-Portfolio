import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Mood Map",
    description: "Developed a machine learning solution for predictive analytics using Python and TensorFlow. Features automated data processing and visualization dashboards.",
    image: project1,
    github: "https://github.com/Tech-Hubb/Mood-Map",
    demo: "https://share.zight.com/WnunPYX1",
    demoLabel: "View Demo",
    tags: ["Python", "TensorFlow", "ML"],
  },
  {
    title: "ThriveSense Mental Wellness",
    description: "Built an AI-powered mental wellness assistant that provides personalized support and guidance. Integrates machine learning for sentiment analysis and adaptive responses.",
    image: project3,
    github: "https://github.com/Tech-Hubb/Thrivesense-AI-Wellness-assistant",
    demo: "https://share.zight.com/WnunLzPN",
    demoLabel: "View Demo",
    tags: ["AI", "NLP", "Wellness"],
  },
  {
    title: "Algora Chatbot",
    description: "Created a comprehensive BI system integrating SQL databases with interactive reporting tools. Streamlined business decision-making processes.",
    image: project2,
    github: "https://github.com/JadenMcRowdie/Algora-Chatbot",
    demo: "https://creator.voiceflow.com/share/68aea8e4d54e34927d61667f/development",
    demoLabel: "View Website",
    tags: ["Chatbot", "SQL", "BI"],
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > 50;

    if (isSwipe) {
      if (distance > 0 && currentIndex < projects.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else if (distance < 0 && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
      }
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            My work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my work in AI/ML, business systems, and web development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-6" />
        </div>
        
        {/* Mobile Carousel */}
        {isMobile ? (
          <div className="relative">
            <div 
              ref={containerRef}
              className="overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <ProjectCard project={project} index={index} />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mobile navigation dots */}
            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary w-8' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
            
            {/* Swipe hint */}
            <p className="text-center text-muted-foreground text-sm mt-4">
              Swipe to explore more projects
            </p>
          </div>
        ) : (
          /* Desktop Grid with staggered layout */
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className={`${index === 1 ? 'lg:translate-y-8' : ''}`}
                >
                  <ProjectCard project={project} index={index} />
                </div>
              ))}
            </div>
            
            {/* Desktop navigation arrows */}
            <button 
              onClick={prevSlide}
              className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hidden xl:flex"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hidden xl:flex"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="creative-card bg-card border-0 rounded-2xl overflow-hidden group h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image with dynamic background shift */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          style={{
            transform: isHovered ? `scale(1.1) translate(${Math.sin(index) * 2}%, ${Math.cos(index) * 2}%)` : 'scale(1)',
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
        
        {/* Tags */}
        <div className="absolute top-4 left-4 flex gap-2">
          {project.tags.map((tag, i) => (
            <span 
              key={i}
              className="px-3 py-1 bg-white/90 backdrop-blur-sm text-foreground text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="font-display text-xl group-hover:text-primary transition-colors duration-300">
          {project.title}
        </CardTitle>
        <CardDescription className="text-base line-clamp-3">
          {project.description}
        </CardDescription>
      </CardHeader>
      
      <CardFooter className="flex gap-3 flex-wrap pt-4">
        <Button 
          size="sm" 
          asChild
          className="bg-primary hover:bg-primary-dark text-primary-foreground rounded-lg transition-all duration-300 hover:-translate-y-0.5"
        >
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            Code
          </a>
        </Button>
        {project.demo && (
          <Button 
            variant="outline" 
            size="sm" 
            asChild
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              {project.demoLabel}
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default Projects;