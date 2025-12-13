import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, DollarSign, Home, Car, Utensils, Heart, Zap, ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const usaCities = [
  { id: "nyc", name: "New York City", costIndex: 1.87 },
  { id: "sf", name: "San Francisco", costIndex: 1.79 },
  { id: "la", name: "Los Angeles", costIndex: 1.66 },
  { id: "chicago", name: "Chicago", costIndex: 1.45 },
  { id: "miami", name: "Miami", costIndex: 1.52 },
  { id: "seattle", name: "Seattle", costIndex: 1.58 },
  { id: "boston", name: "Boston", costIndex: 1.65 },
  { id: "denver", name: "Denver", costIndex: 1.38 },
  { id: "austin", name: "Austin", costIndex: 1.35 },
  { id: "phoenix", name: "Phoenix", costIndex: 1.22 },
];

const spainRegions = [
  { id: "madrid", name: "Madrid", costIndex: 1.0, description: "Capital city, vibrant culture" },
  { id: "barcelona", name: "Barcelona", costIndex: 1.05, description: "Mediterranean coast, cosmopolitan" },
  { id: "valencia", name: "Valencia", costIndex: 0.82, description: "Great weather, growing expat hub" },
  { id: "malaga", name: "Málaga", costIndex: 0.78, description: "Costa del Sol, sunny lifestyle" },
  { id: "seville", name: "Seville", costIndex: 0.75, description: "Authentic Andalusian charm" },
  { id: "bilbao", name: "Bilbao", costIndex: 0.88, description: "Basque Country, food capital" },
  { id: "alicante", name: "Alicante", costIndex: 0.72, description: "Beach lifestyle, affordable" },
  { id: "granada", name: "Granada", costIndex: 0.68, description: "Cultural gem, very affordable" },
];

const lifestyleOptions = [
  { id: "frugal", label: "Frugal", multiplier: 0.7, description: "Budget-conscious living" },
  { id: "moderate", label: "Moderate", multiplier: 1.0, description: "Comfortable middle ground" },
  { id: "comfortable", label: "Comfortable", multiplier: 1.3, description: "Higher quality of life" },
  { id: "luxury", label: "Luxury", multiplier: 1.7, description: "Premium lifestyle" },
];

// Base costs in Madrid (moderate lifestyle) in EUR
const baseCosts = {
  housing: 1200,
  utilities: 120,
  groceries: 350,
  dining: 200,
  transport: 100,
  healthcare: 100,
  entertainment: 150,
  misc: 180,
};

export default function CostCalculator() {
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [lifestyle, setLifestyle] = useState<string>("moderate");
  const [householdSize, setHouseholdSize] = useState<number>(1);
  const [showResults, setShowResults] = useState(false);

  const calculateCosts = () => {
    const region = spainRegions.find(r => r.id === selectedRegion);
    const city = usaCities.find(c => c.id === selectedCity);
    const lifestyleOption = lifestyleOptions.find(l => l.id === lifestyle);

    if (!region || !lifestyleOption) return null;

    const householdMultiplier = 1 + (householdSize - 1) * 0.4;
    const regionMultiplier = region.costIndex;
    const lifestyleMultiplier = lifestyleOption.multiplier;

    const spainCosts = {
      housing: Math.round(baseCosts.housing * regionMultiplier * lifestyleMultiplier * (householdSize > 2 ? 1.3 : 1)),
      utilities: Math.round(baseCosts.utilities * regionMultiplier * householdMultiplier),
      groceries: Math.round(baseCosts.groceries * regionMultiplier * lifestyleMultiplier * householdMultiplier),
      dining: Math.round(baseCosts.dining * lifestyleMultiplier * householdMultiplier),
      transport: Math.round(baseCosts.transport * regionMultiplier * (householdSize > 1 ? 1.5 : 1)),
      healthcare: Math.round(baseCosts.healthcare * householdMultiplier),
      entertainment: Math.round(baseCosts.entertainment * lifestyleMultiplier * householdMultiplier),
      misc: Math.round(baseCosts.misc * lifestyleMultiplier * householdMultiplier),
    };

    const totalSpain = Object.values(spainCosts).reduce((a, b) => a + b, 0);

    // Calculate equivalent US costs
    const usCityMultiplier = city ? city.costIndex : 1.5;
    const totalUS = Math.round(totalSpain * usCityMultiplier * 1.1); // Additional 1.1x for USD conversion

    return {
      spain: spainCosts,
      totalSpain,
      totalUS,
      savings: totalUS - totalSpain,
      savingsPercent: Math.round(((totalUS - totalSpain) / totalUS) * 100),
    };
  };

  const handleCalculate = () => {
    if (selectedRegion) {
      setShowResults(true);
    }
  };

  const costs = showResults ? calculateCosts() : null;
  const selectedRegionData = spainRegions.find(r => r.id === selectedRegion);
  const selectedCityData = usaCities.find(c => c.id === selectedCity);

  const costCategories = [
    { key: "housing", label: "Housing", icon: Home },
    { key: "utilities", label: "Utilities", icon: Zap },
    { key: "groceries", label: "Groceries", icon: Utensils },
    { key: "dining", label: "Dining Out", icon: Utensils },
    { key: "transport", label: "Transport", icon: Car },
    { key: "healthcare", label: "Healthcare", icon: Heart },
    { key: "entertainment", label: "Entertainment", icon: DollarSign },
    { key: "misc", label: "Miscellaneous", icon: DollarSign },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <span className="text-navy font-semibold text-sm uppercase tracking-wider mb-4 block">
                Cost of Living Calculator
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Compare Your Costs: US vs Spain
              </h1>
              <p className="text-muted-foreground text-lg">
                See exactly how much you could save by moving to Spain.
              </p>
            </motion.div>

            {!showResults ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                {/* US City Selection */}
                <div className="bg-card rounded-2xl border border-border p-8">
                  <h2 className="text-xl font-semibold text-card-foreground mb-4">
                    Where do you currently live?
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {usaCities.map((city) => (
                      <button
                        key={city.id}
                        onClick={() => setSelectedCity(city.id)}
                        className={cn(
                          "p-3 rounded-xl border-2 text-sm font-medium transition-all",
                          selectedCity === city.id
                            ? "border-navy bg-navy/10 text-navy"
                            : "border-border hover:border-navy/50"
                        )}
                      >
                        {city.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Spain Region Selection */}
                <div className="bg-card rounded-2xl border border-border p-8">
                  <h2 className="text-xl font-semibold text-card-foreground mb-4">
                    Where in Spain would you like to live?
                  </h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {spainRegions.map((region) => (
                      <button
                        key={region.id}
                        onClick={() => setSelectedRegion(region.id)}
                        className={cn(
                          "p-4 rounded-xl border-2 text-left transition-all",
                          selectedRegion === region.id
                            ? "border-navy bg-navy/10"
                            : "border-border hover:border-navy/50"
                        )}
                      >
                        <div className="font-medium text-card-foreground">{region.name}</div>
                        <div className="text-sm text-muted-foreground">{region.description}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Lifestyle Selection */}
                <div className="bg-card rounded-2xl border border-border p-8">
                  <h2 className="text-xl font-semibold text-card-foreground mb-4">
                    What's your lifestyle preference?
                  </h2>
                  <div className="grid md:grid-cols-4 gap-3">
                    {lifestyleOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setLifestyle(option.id)}
                        className={cn(
                          "p-4 rounded-xl border-2 text-center transition-all",
                          lifestyle === option.id
                            ? "border-navy bg-navy/10"
                            : "border-border hover:border-navy/50"
                        )}
                      >
                        <div className="font-medium text-card-foreground">{option.label}</div>
                        <div className="text-xs text-muted-foreground">{option.description}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Household Size */}
                <div className="bg-card rounded-2xl border border-border p-8">
                  <h2 className="text-xl font-semibold text-card-foreground mb-4">
                    Household size
                  </h2>
                  <div className="flex gap-3">
                    {[1, 2, 3, 4].map((size) => (
                      <button
                        key={size}
                        onClick={() => setHouseholdSize(size)}
                        className={cn(
                          "w-14 h-14 rounded-xl border-2 font-semibold transition-all",
                          householdSize === size
                            ? "border-navy bg-navy text-accent-foreground"
                            : "border-border hover:border-navy/50"
                        )}
                      >
                        {size}{size === 4 ? "+" : ""}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Calculate Button */}
                <div className="text-center">
                  <Button
                    variant="navy"
                    size="xl"
                    onClick={handleCalculate}
                    disabled={!selectedRegion}
                  >
                    <Calculator className="w-5 h-5 mr-2" />
                    Calculate My Costs
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                {/* Summary Card */}
                <div className="bg-gradient-to-r from-navy to-navy-light rounded-2xl p-8 text-center text-accent-foreground">
                  <h2 className="text-2xl font-bold mb-2">
                    Living in {selectedRegionData?.name}
                  </h2>
                  <p className="text-accent-foreground/80 mb-6">
                    {lifestyle.charAt(0).toUpperCase() + lifestyle.slice(1)} lifestyle • {householdSize} person{householdSize > 1 ? "s" : ""}
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <div className="text-3xl font-bold">€{costs?.totalSpain.toLocaleString()}</div>
                      <div className="text-accent-foreground/70">Monthly in Spain</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">${costs?.totalUS.toLocaleString()}</div>
                      <div className="text-accent-foreground/70">
                        Monthly in {selectedCityData?.name || "US"}
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-olive-light">
                        {costs?.savingsPercent}% Less
                      </div>
                      <div className="text-accent-foreground/70">You'd Save</div>
                    </div>
                  </div>
                </div>

                {/* Breakdown */}
                <div className="bg-card rounded-2xl border border-border p-8">
                  <h3 className="text-xl font-semibold text-card-foreground mb-6">
                    Monthly Budget Breakdown for {selectedRegionData?.name}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {costCategories.map((cat) => (
                      <div
                        key={cat.key}
                        className="flex items-center justify-between p-4 rounded-xl bg-muted/50"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center">
                            <cat.icon className="w-5 h-5 text-navy" />
                          </div>
                          <span className="font-medium text-card-foreground">{cat.label}</span>
                        </div>
                        <span className="font-semibold text-card-foreground">
                          €{costs?.spain[cat.key as keyof typeof costs.spain].toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommended Regions */}
                <div className="bg-muted/50 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Looking for More Affordable Options?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Based on your preferences, here are some regions where your money goes further:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    {spainRegions
                      .filter(r => r.costIndex < 0.8)
                      .slice(0, 3)
                      .map((region) => (
                        <div key={region.id} className="bg-card rounded-xl p-4 border border-border">
                          <div className="font-semibold text-card-foreground">{region.name}</div>
                          <div className="text-sm text-muted-foreground">{region.description}</div>
                          <div className="text-sm text-olive font-medium mt-2">
                            {Math.round((1 - region.costIndex) * 100)}% cheaper than Madrid
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" size="lg" onClick={() => setShowResults(false)}>
                    Adjust Parameters
                  </Button>
                  <Button variant="navy" size="lg">
                    Download Budget Template
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
