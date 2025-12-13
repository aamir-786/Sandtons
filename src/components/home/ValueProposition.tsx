import { motion } from "framer-motion";
import { Shield, Zap, Heart, Globe } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Instant Answers",
    description: "No waiting, no gatekeeping. Get immediate results from all our tools without providing your email first.",
  },
  {
    icon: Shield,
    title: "Expert-Backed",
    description: "Every recommendation is based on current Spanish immigration law and real expat experiences.",
  },
  {
    icon: Heart,
    title: "Human Support",
    description: "When you're ready for personalized help, our consultants are here to guide you through every step.",
  },
  {
    icon: Globe,
    title: "US-Focused",
    description: "Specifically designed for Americans, addressing the unique aspects of US-to-Spain relocation.",
  },
];

export function ValueProposition() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-olive font-semibold text-sm uppercase tracking-wider mb-4 block">
            Why Sandtons
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Value First, Always
          </h2>
          <p className="text-muted-foreground text-lg">
            We believe in helping you first. That's why all our tools give you real answers before asking for anything in return.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
