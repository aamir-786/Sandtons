import { motion } from "framer-motion";
import { AlertTriangle, FileQuestion, Globe } from "lucide-react";

const hurdles = [
  {
    icon: FileQuestion,
    title: "Visa Confusion",
    description: "Over 7 different visa types with complex eligibility requirements that change frequently.",
  },
  {
    icon: Globe,
    title: "Language Barriers",
    description: "Most official processes require Spanish documentation and in-person appointments.",
  },
  {
    icon: AlertTriangle,
    title: "Hidden Costs",
    description: "Unexpected fees, taxes, and requirements that can derail your relocation budget.",
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
            The 3 Biggest Relocation Hurdles
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
              className="text-center"
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
