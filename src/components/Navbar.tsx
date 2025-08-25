import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/destinace", label: "Destinace" },
    { href: "/oblibena-mista", label: "Oblíbená místa" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <TooltipProvider>
      <nav className="fixed top-0 z-50 w-full bg-transparent">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-center">
            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div>
                          <NavigationMenuLink 
                            className={cn(
                              navigationMenuTriggerStyle(),
                              "text-white hover:text-white/80 hover:bg-white/10 cursor-pointer"
                            )}
                            onClick={(e) => e.preventDefault()}
                          >
                            {item.label}
                          </NavigationMenuLink>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Bude brzo k dispozici</p>
                      </TooltipContent>
                    </Tooltip>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-white hover:text-white/80 hover:bg-white/10"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-black/20 backdrop-blur rounded-lg mt-2">
                {navItems.map((item) => (
                  <Tooltip key={item.href}>
                    <TooltipTrigger asChild>
                      <div
                        className="block px-3 py-2 rounded-md text-base font-medium transition-colors text-white hover:text-white/80 hover:bg-white/10 cursor-pointer"
                        onClick={(e) => e.preventDefault()}
                      >
                        {item.label}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Bude brzo k dispozici</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </TooltipProvider>
  );
};

export default Navbar;