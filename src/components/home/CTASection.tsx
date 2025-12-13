import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-terracotta-dark to-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-olive rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Ready to Start?
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Your Spanish Dream is Closer Than You Think
          </h2>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Take the first step today. Our free tools will give you instant clarity on visas, costs, and your perfect Spanish region.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/visa-quiz">
                Start Visa Quiz
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="xl"
              className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link to="/contact">Talk to an Expert</Link>
            </Button>
          </div>

          <p className="text-sm text-primary-foreground/60 mt-8">
            No email required. Get instant results.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
