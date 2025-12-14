import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCTASection() {
  return (
    <section className="py-20 bg-navy text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Our mortgage experts are ready to help you navigate the Spanish property market. 
            Get personalized guidance for your situation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/contact">
                <MessageCircle className="w-5 h-5 mr-2" />
                Talk to an Expert
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="xl"
              className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a href="tel:+34912345678">
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
