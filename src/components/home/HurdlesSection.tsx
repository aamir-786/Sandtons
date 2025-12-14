import { motion } from "framer-motion";
import { FileQuestion, Globe, AlertTriangle } from "lucide-react";

const hurdles = [
  {
    icon: FileQuestion,
    title: "Unfamiliar Spanish Banking System",
    description: "Complex documentation requirements and processes that differ significantly from US lending practices.",
  },
  {
    icon: Globe,
    title: "Language and Currency Hurdles",
    description: "Navigating mortgage terms in Spanish while dealing with Euro-Dollar exchange rate fluctuations.",
  },
  {
    icon: AlertTriangle,
    title: "Hidden Fees, Taxes & Legal Requirements",
    description: "Understanding all costs involved including notary fees, registration taxes, and legal requirements.",
  },
];

export function HurdlesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The 3 Most Mortgages Hurdles
            <span className="block text-primary">for Americans</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {hurdles.map((hurdle, index) => (
            <motion.div
              key={hurdle.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center bg-card rounded-2xl border border-border p-8 card-hover"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <hurdle.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {hurdle.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                {hurdle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
