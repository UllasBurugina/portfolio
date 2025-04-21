import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header"
import { Typewriter } from "./components/typewriter";
import ProjectsGrid from "./components/projects-grid";
import Footer from "./components/footer";
import PortfolioCodeBlock from "./components/code";
import { ContactSection } from "./components/contact";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <div className="container mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left column - Typewriter component (80% width) */}
        <div className="w-full md:w-3/5">
          <Typewriter />
        </div>
        
        {/* Right column - PortfolioCodeBlock component (20% width) */}
        <div className="w-full md:w-2/5">
          <PortfolioCodeBlock />
        </div>
      </div>
      </div>
      <ProjectsGrid />
      <ContactSection /> 
      <Footer />
    </ThemeProvider>
  );
}

export default App;
