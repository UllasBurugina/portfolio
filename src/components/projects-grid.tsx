import { useEffect, useRef } from "react";
import huntForHistoryImage from "@/assets/huntforhistory.png";

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.add("translate-y-0");
            entry.target.classList.remove("opacity-0");
            entry.target.classList.remove("translate-y-4");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card, index) => {
      // Set different transition delays programmatically
      (card as HTMLElement).style.transitionDelay = `${index * 200}ms`;
      observer.observe(card);
    });
    
    return () => {
      projectCards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-24 bg-neutral-900 dark:bg-black border-t border-b border-neutral-800"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 gap-10">
          <ProjectCard 
            title="Scavenger Hunt Website"
            subtitle="HuntForHistory"
            url="https://huntforhistory.com"
            skills={["WordPress", "Elementor", "PHP", "CSS"]}
          />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ 
  title, 
  subtitle, 
  url, 
  skills
}: { 
  title: string; 
  subtitle: string; 
  url: string; 
  skills: string[];
}) {
  return (
    <div className="project-card opacity-0 translate-y-4 transform transition duration-700 flex flex-col rounded-xl border border-neutral-700 bg-neutral-800 shadow-md hover:shadow-xl hover:border-neutral-600 hover:translate-y-0 overflow-hidden">
      {/* Image Placeholder */}
      <div className="w-full h-64 bg-neutral-700 relative">
        <img 
          src={url === "https://huntforhistory.com" ? huntForHistoryImage : "/api/placeholder/400/320"}
          alt={`${title} preview`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-white mb-2">
          {title}
        </h3>
        <p className="text-lg text-neutral-300 mb-6">
          {subtitle}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-3 mb-8">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 text-sm font-medium bg-neutral-700 text-neutral-200 rounded-full hover:bg-neutral-600 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          {/* View Website Button */}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-colors font-medium"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}