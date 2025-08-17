import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Download, Mail, Github, Linkedin, BadgeCheck } from "lucide-react";
import { useState, useEffect } from "react";
import ProfileImage from "../assets/profile.jpg"

function MyStory() {
  const [clientProgress, setClientProgress] = useState(0);
  const [projectProgress, setProjectProgress] = useState(0);
  
  useEffect(() => {
    const timer1 = setTimeout(() => setClientProgress(85), 500);
    const timer2 = setTimeout(() => setProjectProgress(92), 700);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const skills = ["React", "Tailwind", "Python", "ML", "JavaScript"];

  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-muted-foreground">
        <a href="/portfolio/" className="text-black-500 hover:underline">Home</a> / <span className="text-foreground">My Story</span>

      </nav>

      {/* Hero Section */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Avatar Section */}
          <div className="flex-shrink-0">
            <Avatar className="w-40 h-40">
              <AvatarImage src={ProfileImage} alt="Profile" />
              <AvatarFallback>UB</AvatarFallback>
            </Avatar>
          </div>
          
          {/* Description */}
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Hi, I'm Ullas</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Full-stack developer by day, headshot-hitting FPS gamer by night (peaked Diamond in Valorant). 
              I craft scalable, user-centric digital experiences with a blend of creativity, technical precision, and competitive drive. 
              Always building, always competing, always leveling up.
            </p>
            
            {/* Skills Badges */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>

            {/* Status Badge */}
            <Badge variant="secondary" className="bg-green-500 text-white dark:bg-green-600">
              <BadgeCheck className="w-4 h-4 mr-1" />
              Available for opportunities
            </Badge>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      {/* Stats Section */}
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-medium">Happy Clients</span>
              <Badge className="h-5 min-w-5 rounded-full px-2 font-mono tabular-nums">
                10+
              </Badge>
            </div>
            <Progress value={clientProgress} className="w-full" />
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-medium">Projects Completed</span>
              <Badge variant="outline" className="h-5 min-w-5 rounded-full px-2 font-mono tabular-nums">
                25+
              </Badge>
            </div>
            <Progress value={projectProgress} className="w-full" />
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Story Sections */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">My Journey</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="background">
            <AccordionTrigger className="text-left">
              Background & Early Interests
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              My journey into technology began during my college years when I discovered the power of code 
              to solve real-world problems. What started as curiosity about how websites work evolved into 
              a deep passion for creating digital solutions that improve people's lives.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="education">
            <AccordionTrigger className="text-left">
              Education & Learning Path
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              I pursued Computer Science with a focus on software engineering. Beyond formal education, 
              I'm a strong believer in continuous learning. I've completed numerous online courses and 
              contributed to open-source projects to stay current with industry trends.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="professional">
            <AccordionTrigger className="text-left">
              Professional Experience
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              My professional journey started with internships where I learned the importance of clean code, 
              collaboration, and user-centric design. I've worked on diverse projects ranging from e-commerce 
              platforms to data visualization tools.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="current">
            <AccordionTrigger className="text-left">
              Current Focus & Goals
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              Currently, I'm focused on mastering cloud architecture and exploring AI/ML integration in 
              web applications. My goal is to build scalable, intelligent systems that adapt to user needs.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <Separator className="my-8" />

      {/* Contact Navigation */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Let's Connect</h2>
        
        <p className="text-muted-foreground mb-6">
          I'm always excited to discuss new opportunities and collaborate on interesting projects.
        </p>
        
        <div className="flex flex-wrap gap-4">
        <a href="mailto:buruginaullas@gmail.com">
          <Button>
            <Mail className="w-4 h-4 mr-2" />
            Contact Me
          </Button>
        </a>

        <a href="../assets/Ullas_Burugina" download>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Resume
          </Button>
        </a>

        <a href="https://github.com/UllasBurugina" target="_blank" rel="noopener noreferrer">
          <Button variant="outline">
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
        </a>

        <a href="https://www.linkedin.com/in/ullas-burugina-b03b7a259/" target="_blank" rel="noopener noreferrer">
          <Button variant="outline">
            <Linkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </Button>
        </a>
        </div>
        </section>
      </div>
  );
}

export default MyStory;