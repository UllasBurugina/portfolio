import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header"
import { Typewriter } from "./components/typewriter";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Typewriter />
    </ThemeProvider>
  );
}

export default App;
