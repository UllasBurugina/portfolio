"use client";
import { cn } from "@/lib/utils";
import { motion, useAnimate } from "motion/react";
import { useEffect, useState } from "react";

export function Typewriter() {
  const skills = [
    "Web Developer",
    "AI/ML Engineer",
    "Problem Solver",
  ];
  
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [scope] = useAnimate();
  
  useEffect(() => {
    const currentSkill = skills[currentSkillIndex];
    let timeout: NodeJS.Timeout;
    
    if (!isDeleting) {
      // Typing
      if (displayText.length < currentSkill.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentSkill.slice(0, displayText.length + 1));
        }, 100);
      } else {
        // Finished typing, wait before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        // Finished deleting, move to next skill
        setIsDeleting(false);
        setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentSkillIndex, skills]);
  
  return (
    <div className="flex flex-col items-start justify-center h-[40rem] w-full px-8 md:px-24">
      {/* Typewriter Text */}
      <div className="flex items-center space-x-2">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl md:text-6xl font-bold dark:text-white"
        >
          I am a
        </motion.span>
        <motion.span
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-block"
        >
          <span className="text-4xl md:text-6xl font-bold text-green-500 dark:text-green-400">
            {displayText}
          </span>
          <motion.span
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className={cn(
              "inline-block rounded-sm w-[4px] h-8 md:h-12 ml-1 bg-green-500",
            )}
          />
        </motion.span>
      </div>

      {/* Passionate Text Below */}
      <p className="text-neutral-600 dark:text-neutral-200 text-xl font-bold mt-10 mb-10 text-left">
        Passionate about building innovative solutions
      </p>

      {/* Button */}
      <div className="mt-10 w-full">
        <button 
          onClick={() => {
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
              projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          className="w-40 h-10 rounded-l border border-white bg-black text-white hover:bg-white hover:text-black transition-colors duration-200 text-sm font-medium float-right"
        >
          View Projects
        </button>
      </div>
    </div>
  );
}