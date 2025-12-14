import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Can Americans get a mortgage in Spain?",
    answer: "Yes! Non-resident Americans can obtain Spanish mortgages. Typically, lenders offer 60-70% LTV (loan-to-value) for non-residents, compared to up to 80% for residents. You'll need to provide proof of income, tax returns, and other standard documentation.",
  },
  {
    question: "What are the typical mortgage rates for non-residents?",
    answer: "Current rates for non-residents typically range from 3.5% to 5% for fixed-rate mortgages, depending on the lender and your financial profile. Variable rates start around Euribor + 1-2%. We help you find the most competitive rates available.",
  },
  {
    question: "What documents do I need for a Spanish mortgage?",
    answer: "You'll typically need: valid passport, proof of income (pay stubs, tax returns), bank statements (last 6-12 months), credit report, existing debt documentation, and property valuation. We guide you through preparing all required documents.",
  },
  {
    question: "How long does the mortgage process take?",
    answer: "From application to completion, expect 4-8 weeks for mortgage approval. The full property purchase process, including finding a property and completing legal requirements, typically takes 2-4 months.",
  },
  {
    question: "What additional costs should I expect?",
    answer: "Beyond the purchase price, budget for: property transfer tax (6-10%), notary fees (0.5-1%), registration fees (0.5-1%), legal fees (1-2%), and mortgage arrangement fees (0.5-1%). We provide detailed cost breakdowns with our calculator.",
  },
  {
    question: "Do I need a Spanish bank account?",
    answer: "Yes, you'll need a Spanish bank account for mortgage payments and to cover ongoing property expenses. We can assist you in opening an account remotely or help coordinate with Spanish banks during your property purchase.",
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
