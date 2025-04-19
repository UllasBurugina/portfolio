import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header"
import { Typewriter } from "./components/typewriter";
import ProjectsGrid from "./components/projects-grid";
import Footer from "./components/footer";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Typewriter />
      <ProjectsGrid />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
