import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calculator, FileText, Search, CheckCircle, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import mortgageHeroImage from "@/assets/mortgage-hero.jpg";

const trustBadges = [
  { icon: Shield, label: "Verified Lenders" },
  { icon: Clock, label: "Fast Approval" },
  { icon: Award, label: "Best Rates" },
  { icon: CheckCircle, label: "Expert Support" },
];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={mortgageHeroImage}
          alt="Couple walking on Spanish beach looking at properties"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="max-w-3xl">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Spanish Mortgages for US Citizens
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl leading-relaxed">
              Expert guidance to help Americans secure the best mortgage rates in Spain. From application to approval, we make financing your Spanish dream home simple.
            </p>

            {/* Search/CTA Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card/95 backdrop-blur-md rounded-2xl p-6 shadow-xl max-w-2xl mb-8"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-background rounded-xl border border-border">
                  <Search className="w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Property value or mortgage amount..."
                    className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
                  />
                </div>
                <Button variant="default" size="lg" asChild>
                  <Link to="/cost-calculator">
                    <Calculator className="w-5 h-5 mr-2" />
                    Calculate
                  </Link>
                </Button>
              </div>
              <div className="flex flex-wrap gap-4 mt-4 text-sm">
                <Link to="/visa-quiz" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <FileText className="w-4 h-4" />
                  Visa Eligibility
                </Link>
                <Link to="/readiness-check" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <CheckCircle className="w-4 h-4" />
                  Readiness Check
                </Link>
                <Link to="/region-finder" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Search className="w-4 h-4" />
                  Find Regions
                </Link>
              </div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-6"
            >
              {trustBadges.map((badge, index) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 text-primary-foreground/80"
                >
                  <badge.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{badge.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
