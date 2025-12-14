import { motion } from "framer-motion";
import { FileCheck, Search, Home, FileText, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Initial Consultation",
    description: "We assess your financial situation, property goals, and connect you with the right lenders for your needs.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=200&fit=crop",
  },
  {
    number: "02",
    icon: FileText,
    title: "Property Search",
    description: "Find your ideal Spanish property with our network of trusted real estate agents across all regions.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=300&h=200&fit=crop",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Document Preparation",
    description: "We guide you through all required documentation: proof of income, tax returns, and identity verification.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop",
  },
  {
    number: "04",
    icon: Home,
    title: "Mortgage Application",
    description: "Submit your application to pre-approved lenders and receive competitive offers within weeks.",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=300&h=200&fit=crop",
  },
  {
    number: "05",
    icon: CheckCircle,
    title: "Signing & Completion",
    description: "Complete the purchase with notary appointment, final signing, and get your keys to your Spanish home.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&h=200&fit=crop",
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-olive font-semibold text-sm uppercase tracking-wider mb-4 block">
            Your Roadmap
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Step-By-Step Guide:
            <span className="block text-primary">Spanish Mortgage Process</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-border -translate-x-1/2 z-0" />
                )}
                
                <div className="bg-card rounded-xl border border-border overflow-hidden card-hover relative z-10">
                  {/* Image */}
                  <div className="relative h-24 overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    <div className="absolute top-2 left-2 w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-xs">{step.number}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <step.icon className="w-4 h-4 text-primary" />
                      <h3 className="font-semibold text-card-foreground text-sm">{step.title}</h3>
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
