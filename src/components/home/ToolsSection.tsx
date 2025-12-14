import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calculator, FileText, Search, Map, Building, Percent, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const tools = [
  {
    icon: Calculator,
    title: "Property Budget",
    description: "Calculate your budget",
    href: "/cost-calculator",
    color: "primary",
  },
  {
    icon: FileText,
    title: "Visa Check",
    description: "Check eligibility",
    href: "/visa-quiz",
    color: "olive",
  },
  {
    icon: Percent,
    title: "Rate Calculator",
    description: "Compare rates",
    href: "/cost-calculator",
    color: "navy",
  },
  {
    icon: Search,
    title: "Affordability",
    description: "What can you afford",
    href: "/cost-calculator",
    color: "primary",
  },
  {
    icon: Map,
    title: "Region Finder",
    description: "Find your area",
    href: "/region-finder",
    color: "olive",
  },
  {
    icon: Building,
    title: "Lender Match",
    description: "Find lenders",
    href: "/contact",
    color: "navy",
  },
];

const colorMap: Record<string, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  olive: "bg-olive text-primary-foreground hover:bg-olive/90",
  navy: "bg-navy text-primary-foreground hover:bg-navy/90",
};

export function ToolsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Solve These Instantly
          </h2>
          <p className="text-muted-foreground text-lg">
            Free tools to help you navigate Spanish mortgages with confidence.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mb-12">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={tool.href}
                className="group flex flex-col items-center text-center p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all card-hover"
              >
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110",
                    colorMap[tool.color]
                  )}
                >
                  <tool.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-card-foreground text-sm mb-1">
                  {tool.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {tool.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Glance Table Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-muted/30 rounded-2xl p-8 max-w-4xl mx-auto"
        >
          <h3 className="text-xl font-bold text-foreground text-center mb-6">
            Mortgages at a Glance Table
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { label: "Avg. Rate", value: "3.5-4.5%", sublabel: "Fixed rates" },
              { label: "LTV Ratio", value: "Up to 70%", sublabel: "For non-residents" },
              { label: "Term Length", value: "15-25 years", sublabel: "Flexible terms" },
              { label: "Approval Time", value: "4-8 weeks", sublabel: "Average timeline" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card rounded-xl p-4 border border-border">
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-foreground">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
