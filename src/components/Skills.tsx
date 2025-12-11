import { Code2, Database, FileSpreadsheet, Briefcase, Globe, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { name: "HTML & CSS", icon: Globe, description: "Web fundamentals" },
  { name: "JavaScript", icon: Code2, description: "Frontend development" },
  { name: "Java (Basic)", icon: Code2, description: "Object-oriented" },
  { name: "SQL", icon: Database, description: "Data management" },
  { name: "Microsoft Office", icon: FileSpreadsheet, description: "Productivity tools" },
  { name: "Business Analysis", icon: Briefcase, description: "Requirements & solutions" },
  { name: "AI/ML Concepts", icon: Brain, description: "Machine learning" },
];

const Skills = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Angled top */}
      <div 
        className="absolute top-0 left-0 right-0 h-20 bg-background" 
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }} 
      />
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10 pt-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            What I bring to the table
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technical proficiencies and business acumen that drive results
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-6" />
        </div>
        
        {/* Skills grid with staggered layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className={`creative-card bg-card border-0 rounded-2xl group cursor-pointer ${
                index % 3 === 1 ? 'md:translate-y-4' : ''
              }`}
            >
              <CardContent className="flex flex-col items-center justify-center p-6 md:p-8 text-center relative overflow-hidden">
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-500" />
                
                {/* Icon container */}
                <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                
                <h3 className="relative z-10 font-semibold text-foreground mb-1">{skill.name}</h3>
                <p className="relative z-10 text-sm text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;