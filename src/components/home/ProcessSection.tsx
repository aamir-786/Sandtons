import { motion } from "framer-motion";
import { FileCheck, Search, Home, FileText, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Initial Consultation",
    description: "We assess your financial situation and goals.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=180&fit=crop",
  },
  {
    number: "02",
    icon: FileText,
    title: "Property Search",
    description: "Find your ideal Spanish property.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=300&h=180&fit=crop",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Document Prep",
    description: "We guide you through all documents.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=180&fit=crop",
  },
  {
    number: "04",
    icon: Home,
    title: "Mortgage Application",
    description: "Submit to pre-approved lenders.",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=300&h=180&fit=crop",
  },
  {
    number: "05",
    icon: CheckCircle,
    title: "Signing & Completion",
    description: "Get your keys to your Spanish home.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&h=180&fit=crop",
  },
];

export function ProcessSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-olive font-semibold text-xs uppercase tracking-wider mb-2 block">
            Your Roadmap
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Step-By-Step Guide:
          </h2>
          <span className="text-2xl md:text-3xl font-bold text-primary">Spanish Mortgage Process</span>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-card rounded-xl border border-border overflow-hidden card-hover">
                  {/* Image */}
                  <div className="relative h-24 overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                    <div className="absolute top-2 left-2 w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-xs">{step.number}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <step.icon className="w-4 h-4 text-primary" />
                      <h3 className="font-semibold text-card-foreground text-xs">{step.title}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
