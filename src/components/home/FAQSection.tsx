import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How long does the visa process take?",
    answer: "Processing times vary by visa type. Digital Nomad visas typically take 2-4 months, Non-Lucrative visas 1-3 months, and Golden Visas 2-3 months. We recommend starting the process 4-6 months before your planned move date.",
  },
  {
    question: "Do I need to speak Spanish to move to Spain?",
    answer: "While not legally required for most visas, speaking Spanish significantly improves your quality of life. Many expats start with basic Spanish and improve after arrival. Major cities have large English-speaking communities and international services.",
  },
  {
    question: "Can I work in Spain with a Non-Lucrative visa?",
    answer: "No, the Non-Lucrative visa specifically prohibits work in Spain. If you want to work, consider the Digital Nomad visa (for remote work) or Self-Employed visa (for freelancing/business in Spain).",
  },
  {
    question: "What is an NIE and when do I need it?",
    answer: "The NIE (Número de Identificación de Extranjero) is your foreigner identification number. You'll need it for almost everything in Spain: opening a bank account, signing contracts, paying taxes, and more. You should obtain it as soon as possible after arriving.",
  },
  {
    question: "How much money do I need to move to Spain?",
    answer: "Requirements vary by visa type. Non-Lucrative visas require proof of €2,400/month passive income. Digital Nomad visas require €2,500/month. Beyond visa requirements, we recommend 3-6 months of living expenses as a safety buffer.",
  },
  {
    question: "Is healthcare free in Spain?",
    answer: "Spain has excellent public healthcare, but access depends on your visa and residency status. Most visa applicants need private health insurance initially. After becoming a tax resident, you may access the public system. Many expats maintain private insurance for faster access.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <HelpCircle className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              FAQs
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-card rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
              >
                <span className="font-semibold text-card-foreground text-base pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-muted-foreground shrink-0 transition-transform",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5">
                      <p className="text-muted-foreground text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
