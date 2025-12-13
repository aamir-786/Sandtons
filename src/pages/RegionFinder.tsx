import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Euro, Users, Heart, GraduationCap, MapPin, ArrowRight, Check } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const priorities = [
  { id: "climate", label: "Weather & Climate", icon: Sun, description: "Sunny days, mild winters" },
  { id: "cost", label: "Cost of Living", icon: Euro, description: "Affordable lifestyle" },
  { id: "expat", label: "Expat Community", icon: Users, description: "English-speaking friends" },
  { id: "healthcare", label: "Healthcare Quality", icon: Heart, description: "Top medical facilities" },
  { id: "schools", label: "International Schools", icon: GraduationCap, description: "Quality education" },
];

const regions = [
  {
    id: "costa-del-sol",
    name: "Costa del Sol (Málaga)",
    image: "https://images.unsplash.com/photo-1509840841025-9088ba78a826?w=600&h=400&fit=crop",
    scores: { climate: 95, cost: 75, expat: 90, healthcare: 80, schools: 85 },
    description: "Sun-drenched beaches, large expat community, excellent lifestyle.",
    highlights: ["320 sunny days/year", "International airport", "Golf paradise"],
  },
  {
    id: "barcelona",
    name: "Barcelona & Costa Brava",
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&h=400&fit=crop",
    scores: { climate: 80, cost: 60, expat: 85, healthcare: 95, schools: 95 },
    description: "Cosmopolitan city meets Mediterranean beaches. Cultural hub of Spain.",
    highlights: ["World-class dining", "Beach + mountains", "Innovation hub"],
  },
  {
    id: "valencia",
    name: "Valencia & Alicante",
    image: "https://images.unsplash.com/photo-1599316532651-02fdde1d17a6?w=600&h=400&fit=crop",
    scores: { climate: 90, cost: 85, expat: 80, healthcare: 85, schools: 80 },
    description: "Perfect balance of affordability, weather, and quality of life.",
    highlights: ["Best value coastal", "Growing tech scene", "Amazing food"],
  },
  {
    id: "madrid",
    name: "Madrid & Central Spain",
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=600&h=400&fit=crop",
    scores: { climate: 70, cost: 70, expat: 75, healthcare: 95, schools: 95 },
    description: "Vibrant capital with endless culture, dining, and career opportunities.",
    highlights: ["No beach but central", "Best nightlife", "Career hub"],
  },
  {
    id: "basque",
    name: "Basque Country (Bilbao, San Sebastián)",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&h=400&fit=crop",
    scores: { climate: 55, cost: 75, expat: 50, healthcare: 90, schools: 75 },
    description: "Foodie paradise with stunning green landscapes and unique culture.",
    highlights: ["Best food in Spain", "Green mountains", "Rich culture"],
  },
  {
    id: "balearic",
    name: "Balearic Islands (Mallorca, Ibiza)",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop",
    scores: { climate: 90, cost: 55, expat: 85, healthcare: 80, schools: 80 },
    description: "Island living at its finest. Popular with international community.",
    highlights: ["Island lifestyle", "Yacht culture", "International crowd"],
  },
  {
    id: "canary",
    name: "Canary Islands",
    image: "https://images.unsplash.com/photo-1545579133-99bb5ab189bd?w=600&h=400&fit=crop",
    scores: { climate: 98, cost: 80, expat: 75, healthcare: 75, schools: 70 },
    description: "Eternal spring climate. Perfect for those seeking year-round warmth.",
    highlights: ["Perfect weather", "Tax benefits", "Digital nomad hub"],
  },
  {
    id: "andalusia",
    name: "Andalusia (Seville, Granada)",
    image: "https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?w=600&h=400&fit=crop",
    scores: { climate: 85, cost: 90, expat: 65, healthcare: 80, schools: 70 },
    description: "Authentic Spanish culture, stunning architecture, very affordable.",
    highlights: ["Most affordable", "Rich history", "Flamenco culture"],
  },
];

export default function RegionFinder() {
  const [selectedPriorities, setSelectedPriorities] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const togglePriority = (id: string) => {
    if (selectedPriorities.includes(id)) {
      setSelectedPriorities(selectedPriorities.filter(p => p !== id));
    } else if (selectedPriorities.length < 3) {
      setSelectedPriorities([...selectedPriorities, id]);
    }
  };

  const calculateRegionScores = () => {
    return regions
      .map(region => {
        let totalScore = 0;
        selectedPriorities.forEach((priority, index) => {
          const weight = 3 - index;
          totalScore += region.scores[priority as keyof typeof region.scores] * weight;
        });
        return { ...region, totalScore };
      })
      .sort((a, b) => b.totalScore - a.totalScore);
  };

  const rankedRegions = showResults ? calculateRegionScores() : [];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4 block">
                Regional Comparison Tool
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Find Your Perfect Spanish Region
              </h1>
              <p className="text-muted-foreground text-lg">
                Select your top 3 priorities and we'll match you with the best regions.
              </p>
            </motion.div>

            <AnimatePresence mode="wait">
              {!showResults ? (
                <motion.div
                  key="selector"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-8"
                >
                  <div className="bg-card rounded-2xl border border-border p-8">
                    <h2 className="text-xl font-semibold text-card-foreground mb-2">
                      What matters most to you?
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Select up to 3 priorities in order of importance.
                    </p>

                    <div className="space-y-3">
                      {priorities.map((priority) => {
                        const index = selectedPriorities.indexOf(priority.id);
                        const isSelected = index !== -1;
                        return (
                          <button
                            key={priority.id}
                            onClick={() => togglePriority(priority.id)}
                            className={cn(
                              "w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left",
                              isSelected
                                ? "border-secondary bg-secondary/10"
                                : "border-border hover:border-secondary/50 hover:bg-muted/50"
                            )}
                          >
                            <div className={cn(
                              "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                              isSelected ? "bg-secondary text-secondary-foreground" : "bg-muted text-muted-foreground"
                            )}>
                              {isSelected ? (
                                <span className="font-bold">{index + 1}</span>
                              ) : (
                                <priority.icon className="w-6 h-6" />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-card-foreground">
                                {priority.label}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {priority.description}
                              </div>
                            </div>
                            {isSelected && (
                              <Check className="w-5 h-5 text-secondary shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="text-center">
                    <Button
                      variant="secondary"
                      size="xl"
                      onClick={() => setShowResults(true)}
                      disabled={selectedPriorities.length === 0}
                    >
                      <MapPin className="w-5 h-5 mr-2" />
                      Find My Region ({selectedPriorities.length}/3 selected)
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <div className="flex flex-wrap gap-2 justify-center">
                    {selectedPriorities.map((p, i) => {
                      const priority = priorities.find(pr => pr.id === p);
                      return (
                        <span
                          key={p}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium"
                        >
                          <span className="w-5 h-5 rounded-full bg-secondary text-primary-foreground text-xs flex items-center justify-center">
                            {i + 1}
                          </span>
                          {priority?.label}
                        </span>
                      );
                    })}
                  </div>

                  <div className="space-y-6">
                    {rankedRegions.slice(0, 3).map((region, index) => (
                      <motion.div
                        key={region.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.15 }}
                        className={cn(
                          "bg-card rounded-2xl border overflow-hidden",
                          index === 0 ? "border-secondary border-2" : "border-border"
                        )}
                      >
                        {index === 0 && (
                          <div className="bg-secondary text-secondary-foreground text-center py-2 text-sm font-semibold">
                            🏆 Best Match for You
                          </div>
                        )}
                        <div className="md:flex">
                          <div className="md:w-1/3">
                            <img
                              src={region.image}
                              alt={region.name}
                              className="w-full h-48 md:h-full object-cover"
                            />
                          </div>
                          <div className="p-6 md:w-2/3">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <span className="text-sm text-muted-foreground">#{index + 1} Match</span>
                                <h3 className="text-xl font-bold text-card-foreground">
                                  {region.name}
                                </h3>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-secondary">
                                  {Math.round((region.totalScore / (selectedPriorities.length * 3 * 100)) * 100)}%
                                </div>
                                <div className="text-xs text-muted-foreground">Match Score</div>
                              </div>
                            </div>

                            <p className="text-muted-foreground mb-4">
                              {region.description}
                            </p>

                            <div className="flex flex-wrap gap-4 mb-4">
                              {selectedPriorities.map((p) => {
                                const priority = priorities.find(pr => pr.id === p);
                                const score = region.scores[p as keyof typeof region.scores];
                                return (
                                  <div key={p} className="text-sm">
                                    <span className="text-muted-foreground">{priority?.label}: </span>
                                    <span className={cn(
                                      "font-semibold",
                                      score >= 80 ? "text-olive" : score >= 60 ? "text-primary" : "text-muted-foreground"
                                    )}>
                                      {score}%
                                    </span>
                                  </div>
                                );
                              })}
                            </div>

                            <div className="flex flex-wrap gap-2">
                              {region.highlights.map((highlight) => (
                                <span
                                  key={highlight}
                                  className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs"
                                >
                                  {highlight}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-muted/50 rounded-2xl p-8">
                    <h3 className="font-semibold text-foreground mb-4">Other Regions to Consider</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {rankedRegions.slice(3).map((region) => (
                        <div key={region.id} className="bg-card rounded-xl p-4 border border-border">
                          <div className="font-medium text-card-foreground">{region.name}</div>
                          <div className="text-sm text-muted-foreground mt-1">
                            {Math.round((region.totalScore / (selectedPriorities.length * 3 * 100)) * 100)}% match
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="outline" size="lg" onClick={() => {
                      setShowResults(false);
                      setSelectedPriorities([]);
                    }}>
                      Change Priorities
                    </Button>
                    <Button variant="secondary" size="lg">
                      Get Full Regional Guide
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
