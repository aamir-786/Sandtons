import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle, TrendingUp, AlertCircle, Info } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Question {
  id: string;
  category: string;
  question: string;
  options: {
    id: string;
    label: string;
    score: number;
  }[];
}

const questions: Question[] = [
  {
    id: "savings",
    category: "Financial Readiness",
    question: "How much do you have in savings or liquid assets?",
    options: [
      { id: "under-10k", label: "Under $10,000", score: 1 },
      { id: "10k-30k", label: "$10,000 - $30,000", score: 2 },
      { id: "30k-100k", label: "$30,000 - $100,000", score: 3 },
      { id: "over-100k", label: "Over $100,000", score: 4 },
    ],
  },
  {
    id: "income",
    category: "Financial Readiness",
    question: "Do you have a stable income source that will continue in Spain?",
    options: [
      { id: "no", label: "No stable income", score: 1 },
      { id: "unstable", label: "Income but uncertain if it will continue", score: 2 },
      { id: "stable", label: "Yes, stable remote income", score: 4 },
      { id: "passive", label: "Multiple income sources / passive income", score: 4 },
    ],
  },
  {
    id: "spanish",
    category: "Language Skills",
    question: "What's your Spanish language level?",
    options: [
      { id: "none", label: "No Spanish", score: 1 },
      { id: "basic", label: "Basic phrases only", score: 2 },
      { id: "conversational", label: "Conversational", score: 3 },
      { id: "fluent", label: "Fluent or near-fluent", score: 4 },
    ],
  },
  {
    id: "learning",
    category: "Language Skills",
    question: "Are you actively learning Spanish or planning to?",
    options: [
      { id: "no", label: "No plans to learn", score: 1 },
      { id: "maybe", label: "Thinking about it", score: 2 },
      { id: "started", label: "Currently learning", score: 3 },
      { id: "committed", label: "Taking regular classes", score: 4 },
    ],
  },
  {
    id: "visited",
    category: "Lifestyle Fit",
    question: "Have you visited Spain before?",
    options: [
      { id: "never", label: "Never", score: 1 },
      { id: "once", label: "Once as a tourist", score: 2 },
      { id: "multiple", label: "Multiple times", score: 3 },
      { id: "extended", label: "Lived there temporarily", score: 4 },
    ],
  },
  {
    id: "research",
    category: "Lifestyle Fit",
    question: "How much research have you done on living in Spain?",
    options: [
      { id: "none", label: "Just starting", score: 1 },
      { id: "some", label: "Read some articles/watched videos", score: 2 },
      { id: "extensive", label: "Extensive research done", score: 3 },
      { id: "expert", label: "Connected with expats, joined communities", score: 4 },
    ],
  },
  {
    id: "visa",
    category: "Legal Preparedness",
    question: "Do you know which visa you need?",
    options: [
      { id: "no", label: "No idea", score: 1 },
      { id: "vague", label: "Have a vague idea", score: 2 },
      { id: "researched", label: "Researched options", score: 3 },
      { id: "certain", label: "Know exactly which one", score: 4 },
    ],
  },
  {
    id: "documents",
    category: "Legal Preparedness",
    question: "Have you started gathering required documents?",
    options: [
      { id: "no", label: "Haven't started", score: 1 },
      { id: "list", label: "Made a list of needed documents", score: 2 },
      { id: "some", label: "Have some documents ready", score: 3 },
      { id: "all", label: "Most documents prepared", score: 4 },
    ],
  },
  {
    id: "healthcare",
    category: "Practical Planning",
    question: "Have you researched healthcare options in Spain?",
    options: [
      { id: "no", label: "Not yet", score: 1 },
      { id: "basic", label: "Basic understanding", score: 2 },
      { id: "detailed", label: "Know my options", score: 3 },
      { id: "arranged", label: "Already have insurance plan", score: 4 },
    ],
  },
  {
    id: "timeline",
    category: "Practical Planning",
    question: "Do you have a realistic timeline for your move?",
    options: [
      { id: "no", label: "No timeline yet", score: 1 },
      { id: "vague", label: "General timeframe in mind", score: 2 },
      { id: "planned", label: "Detailed timeline created", score: 3 },
      { id: "executing", label: "Already executing the plan", score: 4 },
    ],
  },
];

const categories = ["Financial Readiness", "Language Skills", "Lifestyle Fit", "Legal Preparedness", "Practical Planning"];

function getScoreDetails(score: number) {
  if (score >= 80) {
    return {
      title: "You're Spain Ready!",
      color: "olive",
      description: "Excellent! You've done great preparation. You're well-positioned to make your move to Spain smoothly.",
      icon: CheckCircle,
    };
  } else if (score >= 60) {
    return {
      title: "Almost There",
      color: "primary",
      description: "Good progress! You have a solid foundation but there are a few areas that need attention before your move.",
      icon: TrendingUp,
    };
  } else if (score >= 40) {
    return {
      title: "Getting Started",
      color: "navy",
      description: "You're on the right track but have some preparation ahead. Focus on the areas we've highlighted below.",
      icon: Info,
    };
  } else {
    return {
      title: "Early Stages",
      color: "destructive",
      description: "You're at the beginning of your journey. Don't worry - everyone starts here! Let's build your action plan.",
      icon: AlertCircle,
    };
  }
}

export default function ReadinessCheck() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, { id: string; score: number }>>({});
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  const handleAnswer = (option: { id: string; score: number }) => {
    setAnswers({ ...answers, [currentQuestion.id]: option });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  const calculateScore = () => {
    const totalPossible = questions.length * 4;
    const achieved = Object.values(answers).reduce((sum, a) => sum + a.score, 0);
    return Math.round((achieved / totalPossible) * 100);
  };

  const getCategoryScore = (category: string) => {
    const categoryQuestions = questions.filter(q => q.category === category);
    const totalPossible = categoryQuestions.length * 4;
    const achieved = categoryQuestions.reduce((sum, q) => sum + (answers[q.id]?.score || 0), 0);
    return Math.round((achieved / totalPossible) * 100);
  };

  const score = showResults ? calculateScore() : 0;
  const scoreDetails = getScoreDetails(score);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <span className="text-olive font-semibold text-sm uppercase tracking-wider mb-4 block">
                Spain Readiness Check
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How Ready Are You for Spain?
              </h1>
              <p className="text-muted-foreground text-lg">
                10 questions to evaluate your readiness across 5 key areas.
              </p>
            </motion.div>

            <AnimatePresence mode="wait">
              {!showResults ? (
                <motion.div
                  key="quiz"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <span>{currentQuestion.category}</span>
                      <span>Question {currentStep + 1} of {questions.length}</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-olive rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>

                  {/* Question */}
                  <div className="bg-card rounded-2xl border border-border p-8">
                    <div className="inline-block px-3 py-1 rounded-full bg-olive/10 text-olive text-sm font-medium mb-4">
                      {currentQuestion.category}
                    </div>
                    <h2 className="text-xl md:text-2xl font-semibold text-card-foreground mb-6">
                      {currentQuestion.question}
                    </h2>

                    <div className="space-y-3">
                      {currentQuestion.options.map((option) => {
                        const isSelected = answers[currentQuestion.id]?.id === option.id;
                        return (
                          <button
                            key={option.id}
                            onClick={() => handleAnswer(option)}
                            className={cn(
                              "w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all text-left",
                              isSelected
                                ? "border-olive bg-olive/5"
                                : "border-border hover:border-olive/50 hover:bg-muted/50"
                            )}
                          >
                            <span className="font-medium text-card-foreground">
                              {option.label}
                            </span>
                            {isSelected && (
                              <CheckCircle className="w-5 h-5 text-olive shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-between mt-8">
                      <Button
                        variant="ghost"
                        onClick={handleBack}
                        disabled={currentStep === 0}
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back
                      </Button>
                      <Button
                        variant="olive"
                        onClick={handleNext}
                        disabled={!answers[currentQuestion.id]}
                      >
                        {currentStep === questions.length - 1 ? "See My Score" : "Next"}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  {/* Score Card */}
                  <div className="bg-card rounded-2xl border border-border overflow-hidden">
                    <div className="bg-gradient-to-r from-olive to-olive-light p-8 text-center">
                      <div className="w-32 h-32 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4">
                        <span className="text-5xl font-bold text-primary-foreground">{score}</span>
                      </div>
                      <h2 className="text-2xl font-bold text-primary-foreground mb-2">
                        {scoreDetails.title}
                      </h2>
                      <p className="text-primary-foreground/80 max-w-md mx-auto">
                        {scoreDetails.description}
                      </p>
                    </div>

                    <div className="p-8">
                      <h3 className="font-semibold text-card-foreground mb-6">
                        Your Scores by Category:
                      </h3>
                      <div className="space-y-4">
                        {categories.map((category) => {
                          const catScore = getCategoryScore(category);
                          return (
                            <div key={category}>
                              <div className="flex justify-between text-sm mb-2">
                                <span className="text-muted-foreground">{category}</span>
                                <span className="font-medium text-card-foreground">{catScore}%</span>
                              </div>
                              <div className="h-3 bg-muted rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${catScore}%` }}
                                  transition={{ duration: 0.5, delay: 0.2 }}
                                  className={cn(
                                    "h-full rounded-full",
                                    catScore >= 75 ? "bg-olive" : catScore >= 50 ? "bg-primary" : "bg-navy"
                                  )}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Email Capture */}
                  <div className="bg-muted/50 rounded-2xl p-8 text-center">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Get Your Personalized Action Plan
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      We'll send you a detailed roadmap based on your scores, with specific steps to improve your weak areas.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="flex-1 px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-olive"
                      />
                      <Button variant="olive" size="lg" type="submit">
                        Get Action Plan
                      </Button>
                    </form>
                    <p className="text-xs text-muted-foreground text-center mt-3">
                      No spam, ever. Unsubscribe anytime.
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="outline" size="lg" onClick={handleRestart}>
                      Take Assessment Again
                    </Button>
                    <Button variant="olive" size="lg">
                      Book a Consultation
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
