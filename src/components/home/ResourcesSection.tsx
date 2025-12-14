import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Map, Calculator, BookOpen, Plane, Heart } from "lucide-react";

const resources = [
  {
    icon: FileText,
    title: "Mortgage Application Guide",
    description: "Step-by-step application process",
    href: "/visa-quiz",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=300&h=200&fit=crop",
  },
  {
    icon: Map,
    title: "Best Regions for Investment",
    description: "Top areas for property buyers",
    href: "/region-finder",
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=300&h=200&fit=crop",
  },
  {
    icon: Calculator,
    title: "Cost Breakdown Guide",
    description: "All fees and taxes explained",
    href: "/cost-calculator",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop",
  },
  {
    icon: BookOpen,
    title: "Legal Requirements",
    description: "Documents you'll need",
    href: "#",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&h=200&fit=crop",
  },
  {
    icon: Plane,
    title: "Relocation Timeline",
    description: "Month-by-month planning",
    href: "#",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=300&h=200&fit=crop",
  },
  {
    icon: Heart,
    title: "Expat Success Stories",
    description: "Real buyer experiences",
    href: "#",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=300&h=200&fit=crop",
  },
];

export function ResourcesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
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
                className="group block bg-card rounded-xl border border-border overflow-hidden hover:border-primary/30 transition-all card-hover"
              >
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                      <resource.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors mb-1">
                    {resource.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      {resource.description}
                    </p>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
