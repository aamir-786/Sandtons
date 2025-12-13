import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sun, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import spainHeroImage from "@/assets/spain-hero.jpg";

const stats = [
  { icon: Users, value: "2,500+", label: "Happy Expats" },
  { icon: Sun, value: "320", label: "Sunny Days/Year" },
  { icon: MapPin, value: "17", label: "Regions to Explore" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary via-terracotta-dark to-primary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-olive rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-foreground/5 rounded-full" />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-olive animate-pulse" />
              <span className="text-primary-foreground/90 text-sm font-medium">
                Your Spanish Adventure Starts Here
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Make Your Move to{" "}
              <span className="relative">
                Spain
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 8C50 2 150 2 198 8"
                    stroke="hsl(var(--olive))"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              Simple
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg leading-relaxed">
              Expert guidance, interactive tools, and personalized support to help Americans navigate visas, costs, and finding their perfect Spanish home.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/visa-quiz">
                  Find Your Visa
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="xl"
                className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link to="/readiness-check">Check Your Readiness</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-foreground">
                      {stat.value}
                    </div>
                    <div className="text-sm text-primary-foreground/60">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element - Creative Image Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Outer Decorative Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary-foreground/20"
              />
              
              {/* Second Ring with Gradient */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary-foreground/10 to-transparent p-1">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-olive/20 to-primary/30" />
              </div>

              {/* Main Image Circle */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-8 rounded-full overflow-hidden shadow-2xl ring-4 ring-primary-foreground/20"
              >
                <img
                  src={spainHeroImage}
                  alt="Beautiful Spanish coastal town with white Mediterranean architecture"
                  className="w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-700"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
                {/* Text Overlay */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
                  <span className="text-primary-foreground font-bold text-xl drop-shadow-lg">
                    ¡Bienvenidos!
                  </span>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 right-0 bg-card rounded-xl shadow-xl p-4 border border-border backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-olive/20 flex items-center justify-center">
                    <Sun className="w-5 h-5 text-olive" />
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground text-sm">Perfect Weather</div>
                    <div className="text-xs text-muted-foreground">300+ sunny days</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -left-8 bg-card rounded-xl shadow-xl p-4 border border-border backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground text-sm">Find Your Region</div>
                    <div className="text-xs text-muted-foreground">17 unique options</div>
                  </div>
                </div>
              </motion.div>

              {/* Extra floating element */}
              <motion.div
                animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/3 -right-12 bg-olive text-olive-foreground rounded-full px-4 py-2 shadow-lg text-sm font-medium"
              >
                🌴 Costa del Sol
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}
