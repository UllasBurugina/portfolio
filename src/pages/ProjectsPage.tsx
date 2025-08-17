import React from "react";
import ProjectsGrid from "@/components/projects-grid";

const ProjectsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <ProjectsGrid />
    </div>
  );
};

export default ProjectsPage;
