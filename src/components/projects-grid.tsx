"use client"
import { useEffect, useRef } from "react";
import huntForHistoryImage from "@/assets/huntforhistory.png";

// Define the project type
type Project = {
  title: string;
  subtitle: string;
  description: string;
  url: string;
  skills: string[];
  image: string;
};

// Create project data objects
const projectsData: Project[] = [
  {
    title: "Scavenger Hunt Website",
    subtitle: "HuntForHistory",
    description: "An e-commerce website offering interactive scavenger hunts around the world, featuring image-based puzzles to explore and learn about historical sites.",
    url: "https://huntforhistory.com",
    skills: ["WordPress", "Elementor", "PHP", "CSS"],
    image: huntForHistoryImage
  }
  // add more projects as needed
];

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
      className="py-24 bg-gray-50 dark:bg-neutral-900 border-t border-b border-gray-200 dark:border-neutral-800"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              url={project.url}
              skills={project.skills}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ 
  title, 
  subtitle, 
  description,
  url, 
  skills,
  image
}: Project) {
  return (
    <div className="project-card opacity-0 translate-y-4 transform transition duration-700 flex flex-col rounded-xl border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-md hover:shadow-xl hover:border-gray-300 dark:hover:border-neutral-600 hover:-translate-y-1 overflow-hidden h-full">
      {/* Image */}
      <div className="w-full h-64 bg-gray-100 dark:bg-neutral-700 relative">
        <img 
          src={image}
          alt={`${title} preview`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-lg text-gray-700 dark:text-neutral-300 mb-3">
          {subtitle}
        </p>
        
        {/* Description */}
        <p className="text-gray-600 dark:text-neutral-400 mb-6">
          {description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-3 mb-8">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-neutral-700 text-gray-800 dark:text-neutral-200 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-600 transition-colors"
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
            className="inline-block px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors font-medium"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}