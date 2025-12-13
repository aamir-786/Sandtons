import { motion } from "framer-motion";
import { FileCheck, Search, Home, Plane, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Research & Planning",
    description: "Understand visa options, costs, and choose your ideal region using our free tools.",
  },
  {
    number: "02",
    icon: FileCheck,
    title: "Document Preparation",
    description: "Gather required documents: passport, financial proof, background check, health insurance.",
  },
  {
    number: "03",
    icon: Home,
    title: "Visa Application",
    description: "Submit your application at the Spanish consulate with all required documentation.",
  },
  {
    number: "04",
    icon: Plane,
    title: "Move to Spain",
    description: "After visa approval, complete your move within 90 days and register locally.",
  },
  {
    number: "05",
    icon: CheckCircle,
    title: "Settle In",
    description: "Obtain your NIE, open a bank account, register for healthcare, and start living your Spanish dream.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 bg-background">
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
            Step-by-Step Guide:
            <span className="block text-primary">Spanish Relocation Process</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex gap-6 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-border" />
              )}

              {/* Step number circle */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shrink-0">
                <span className="text-primary-foreground font-bold text-lg">{step.number}</span>
              </div>

              {/* Content */}
              <div className="flex-1 bg-card rounded-2xl border border-border p-6 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <step.icon className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold text-card-foreground">{step.title}</h3>
                </div>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
