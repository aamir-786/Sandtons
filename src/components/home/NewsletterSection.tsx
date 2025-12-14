import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NewsletterSection() {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Mail className="w-6 h-6 text-primary-foreground" />
              <span className="text-primary-foreground/80 font-medium">Newsletter</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-primary-foreground/80 text-base leading-relaxed">
              Get the latest mortgage rates, market updates, and insider tips delivered weekly.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full max-w-md"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 rounded-xl bg-primary-foreground text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 text-base"
              />
              <Button
                type="submit"
                variant="navy"
                size="lg"
                className="whitespace-nowrap"
              >
                Subscribe
              </Button>
            </div>
            <p className="text-primary-foreground/60 text-sm mt-3 text-center sm:text-left">
              No spam. Unsubscribe anytime.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
