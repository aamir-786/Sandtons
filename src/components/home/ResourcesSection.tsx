import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Map, Calculator, BookOpen, Plane, Heart } from "lucide-react";

const resources = [
  {
    icon: FileText,
    title: "Visa Guides",
    description: "Comprehensive guides for each visa type",
    href: "/visa-quiz",
  },
  {
    icon: Map,
    title: "Region Profiles",
    description: "In-depth look at Spain's best areas",
    href: "/region-finder",
  },
  {
    icon: Calculator,
    title: "Cost Calculators",
    description: "Budget planning tools",
    href: "/cost-calculator",
  },
  {
    icon: BookOpen,
    title: "Document Checklists",
    description: "Everything you need to prepare",
    href: "#",
  },
  {
    icon: Plane,
    title: "Moving Timeline",
    description: "Month-by-month planning guide",
    href: "#",
  },
  {
    icon: Heart,
    title: "Expat Stories",
    description: "Real experiences from Americans",
    href: "#",
  },
];

export function ResourcesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-navy font-semibold text-sm uppercase tracking-wider mb-4 block">
            Resources
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Everything You Need to Know
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={resource.href}
                className="group flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:border-primary/30 transition-all card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <resource.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors mb-1">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {resource.description}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
