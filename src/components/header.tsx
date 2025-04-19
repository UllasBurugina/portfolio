import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/mode-toggle";

export default function Header() {
  // Function to handle smooth scrolling
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="w-full border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="flex items-center">
          <span className="text-xl font-inter font-bold ml-2">Ullas Burugina</span>
        </div>

        <div className="flex items-center gap-4">
          {/* Navigation - with viewport disabled */}
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="flex gap-4">
              {/* Projects as a simple button linking to projects section */}
              <NavigationMenuItem key="projects">
                <NavigationMenuLink 
                  href="#projects" 
                  onClick={(e) => scrollToSection(e, 'projects')}
                  className="inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Projects
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem key="about">
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[200px]">
                  <NavigationMenuLink href="#" className="p-2 block w-full">
                    My Story
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Contact as a simple button */}
              <NavigationMenuItem key="contact">
                <NavigationMenuLink 
                  href="#" 
                  className="inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mode Toggle */}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}