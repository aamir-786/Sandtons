import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Tools",
    href: "#",
    children: [
      { label: "Mortgage Calculator", href: "/cost-calculator" },
      { label: "Visa Eligibility", href: "/visa-quiz" },
      { label: "Readiness Check", href: "/readiness-check" },
      { label: "Region Finder", href: "/region-finder" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-navy text-primary-foreground py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="mailto:hello@sandtons.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              hello@sandtons.com
            </a>
            <a href="tel:+34912345678" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              +34 912 345 678
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-primary-foreground/70">Spanish Mortgage Experts for US Citizens</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "fixed top-0 md:top-9 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-md py-3"
            : "bg-navy py-4"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">S</span>
            </div>
            <span className={cn(
              "font-bold text-xl",
              isScrolled ? "text-foreground" : "text-primary-foreground"
            )}>Sandtons</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.children ? (
                  <button
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                      isScrolled
                        ? "text-muted-foreground hover:text-foreground hover:bg-muted"
                        : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                    )}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                      location.pathname === item.href
                        ? "text-primary bg-primary/10"
                        : isScrolled
                        ? "text-muted-foreground hover:text-foreground hover:bg-muted"
                        : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                    )}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-52 bg-popover rounded-xl shadow-lg border border-border overflow-hidden z-50"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="default" size="lg" asChild>
              <Link to="/cost-calculator">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              isScrolled ? "hover:bg-muted" : "hover:bg-primary-foreground/10"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-primary-foreground")} />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-primary-foreground")} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-t border-border"
            >
              <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <>
                        <button
                          onClick={() =>
                            setOpenDropdown(
                              openDropdown === item.label ? null : item.label
                            )
                          }
                          className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                        >
                          {item.label}
                          <ChevronDown
                            className={cn(
                              "w-4 h-4 transition-transform",
                              openDropdown === item.label && "rotate-180"
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {openDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.label}
                                  to={child.href}
                                  className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.href}
                        className={cn(
                          "block px-4 py-3 rounded-lg transition-colors",
                          location.pathname === item.href
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <Button variant="default" size="lg" className="mt-4" asChild>
                  <Link to="/cost-calculator">Get Started</Link>
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
