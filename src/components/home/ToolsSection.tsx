import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText, Compass, Calculator, Map, ArrowRight, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const tools = [
  {
    icon: FileText,
    title: "Visa Quick Quiz",
    description: "Answer 5 simple questions and get an instant visa recommendation tailored to your situation.",
    href: "/visa-quiz",
    color: "primary",
    features: ["Instant results", "No email required", "7 visa types covered"],
    time: "2 min",
  },
  {
    icon: Compass,
    title: "Spain Readiness Check",
    description: "Evaluate your financial, legal, and lifestyle readiness with our comprehensive assessment.",
    href: "/readiness-check",
    color: "olive",
    features: ["Personalized score", "Action plan included", "15 key factors"],
    time: "5 min",
  },
  {
    icon: Calculator,
    title: "Cost of Living Calculator",
    description: "Compare your current expenses with Spain's cost of living and plan your budget.",
    href: "/cost-calculator",
    color: "navy",
    features: ["City comparison", "Budget breakdown", "Regional data"],
    time: "3 min",
  },
  {
    icon: Map,
    title: "Regional Comparison Tool",
    description: "Find your perfect Spanish region based on climate, cost, lifestyle, and community.",
    href: "/region-finder",
    color: "secondary",
    features: ["17 regions analyzed", "Priority matching", "Expat insights"],
    time: "4 min",
  },
];

const colorMap = {
  primary: "bg-primary text-primary-foreground",
  olive: "bg-olive text-primary-foreground",
  navy: "bg-navy text-accent-foreground",
  secondary: "bg-secondary text-secondary-foreground",
};

const bgColorMap = {
  primary: "bg-primary/10",
  olive: "bg-olive/10",
  navy: "bg-navy/10",
  secondary: "bg-secondary/30",
};

export function ToolsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Interactive Tools
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Plan Your Move
          </h2>
          <p className="text-muted-foreground text-lg">
            Free, instant access to our suite of tools designed to make your Spanish relocation journey clear and simple.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={tool.href}
                className="group block bg-card rounded-2xl border border-border p-6 lg:p-8 card-hover hover:border-primary/30"
              >
                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div
                    className={cn(
                      "w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110",
                      colorMap[tool.color as keyof typeof colorMap]
                    )}
                  >
                    <tool.icon className="w-7 h-7" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                        {tool.title}
                      </h3>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                        <Clock className="w-3 h-3" />
                        {tool.time}
                      </span>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {tool.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tool.features.map((feature) => (
                        <span
                          key={feature}
                          className={cn(
                            "inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full",
                            bgColorMap[tool.color as keyof typeof bgColorMap]
                          )}
                        >
                          <CheckCircle className="w-3 h-3" />
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                      Start Now
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Not sure where to start? Take our quick visa quiz first.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/visa-quiz">
              Start with Visa Quiz
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
