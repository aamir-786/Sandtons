import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Compass, FileText, Calculator, Map, X, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const tools = [
  {
    icon: FileText,
    label: "Visa Quiz",
    href: "/visa-quiz",
    color: "bg-primary",
  },
  {
    icon: Compass,
    label: "Readiness",
    href: "/readiness-check",
    color: "bg-olive",
  },
  {
    icon: Calculator,
    label: "Costs",
    href: "/cost-calculator",
    color: "bg-navy",
  },
  {
    icon: Map,
    label: "Regions",
    href: "/region-finder",
    color: "bg-secondary",
  },
];

export function FloatingWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      const shouldShow = window.scrollY > 400 || scrollPercent > 30;
      setIsVisible(shouldShow);
    };

    // Also show after 10 seconds
    const timer = setTimeout(() => setIsVisible(true), 10000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-card rounded-2xl shadow-lg border border-border p-4 w-64"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold text-foreground">Quick Tools</span>
              <button
                onClick={() => setIsExpanded(false)}
                className="p-1 rounded-lg hover:bg-muted transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {tools.map((tool) => (
                <Link
                  key={tool.label}
                  to={tool.href}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-muted transition-colors group"
                >
                  <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", tool.color)}>
                    <tool.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {tool.label}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.button
            key="collapsed"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={() => setIsExpanded(true)}
            className="bg-primary text-primary-foreground rounded-full p-4 shadow-lg hover:shadow-glow transition-all hover:scale-105 group"
          >
            <Compass className="w-6 h-6 group-hover:rotate-45 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
