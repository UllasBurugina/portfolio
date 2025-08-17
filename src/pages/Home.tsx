import { Typewriter } from "../components/typewriter";
import ProjectsGrid from "../components/projects-grid";
import PortfolioCodeBlock from "../components/code";
import { ContactSection } from "../components/contact";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left column - Typewriter component (60% width) */}
          <div className="w-full md:w-3/5">
            <Typewriter />
          </div>
          
          {/* Right column - PortfolioCodeBlock component (40% width) */}
          <div className="w-full md:w-2/5">
            <PortfolioCodeBlock />
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <ProjectsGrid />

      <section id="contact">
      {/* Contact Section */}
        <ContactSection />
      </section>
    </>
  );
}

export default Home;