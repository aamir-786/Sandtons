import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle, FileText, Clock, Users, Briefcase, GraduationCap, Heart, Plane } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Question {
  id: string;
  question: string;
  options: {
    id: string;
    label: string;
    icon?: React.ComponentType<{ className?: string }>;
    description?: string;
  }[];
}

const questions: Question[] = [
  {
    id: "purpose",
    question: "What's your primary reason for moving to Spain?",
    options: [
      { id: "work-remote", label: "Remote Work", icon: Briefcase, description: "Work for a non-Spanish company" },
      { id: "work-local", label: "Local Employment", icon: Users, description: "Work for a Spanish company" },
      { id: "retire", label: "Retirement", icon: Heart, description: "Enjoy retirement in Spain" },
      { id: "study", label: "Study", icon: GraduationCap, description: "Pursue education in Spain" },
      { id: "entrepreneur", label: "Start a Business", icon: Briefcase, description: "Launch a business in Spain" },
    ],
  },
  {
    id: "duration",
    question: "How long do you plan to stay in Spain?",
    options: [
      { id: "short", label: "Less than 90 days", description: "Tourist visa duration" },
      { id: "medium", label: "90 days to 1 year", description: "Short-term residency" },
      { id: "long", label: "1 to 5 years", description: "Long-term residency" },
      { id: "permanent", label: "Indefinitely", description: "Make Spain your home" },
    ],
  },
  {
    id: "income",
    question: "What's your annual income level?",
    options: [
      { id: "under-30k", label: "Under $30,000", description: "May need additional proof of savings" },
      { id: "30k-60k", label: "$30,000 - $60,000", description: "Meets most visa requirements" },
      { id: "60k-100k", label: "$60,000 - $100,000", description: "Strong financial standing" },
      { id: "over-100k", label: "Over $100,000", description: "Qualifies for premium visas" },
    ],
  },
  {
    id: "employment",
    question: "What's your current employment situation?",
    options: [
      { id: "employed-remote", label: "Remote Employee", description: "Work remotely for a company" },
      { id: "freelancer", label: "Freelancer/Self-employed", description: "Independent contractor" },
      { id: "business-owner", label: "Business Owner", description: "Own a company" },
      { id: "retired", label: "Retired", description: "No longer working" },
      { id: "seeking", label: "Job Seeking", description: "Looking for employment" },
    ],
  },
  {
    id: "timeline",
    question: "When do you plan to move?",
    options: [
      { id: "asap", label: "As soon as possible", icon: Plane, description: "Within the next 3 months" },
      { id: "6months", label: "Within 6 months", icon: Clock, description: "Time to prepare" },
      { id: "1year", label: "Within a year", icon: Clock, description: "Long-term planning" },
      { id: "exploring", label: "Just exploring", icon: Heart, description: "No set timeline" },
    ],
  },
];

const visaResults = {
  "digital-nomad": {
    name: "Digital Nomad Visa",
    icon: Briefcase,
    description: "Perfect for remote workers earning from non-Spanish companies. Valid for up to 5 years with renewal options.",
    requirements: ["Proof of remote work", "Income above €2,500/month", "Health insurance", "Clean criminal record"],
    timeline: "2-4 months processing",
    color: "primary",
  },
  "non-lucrative": {
    name: "Non-Lucrative Visa",
    icon: Heart,
    description: "Ideal for retirees or those with passive income who don't plan to work in Spain.",
    requirements: ["Proof of passive income €2,400/month", "Health insurance", "No intention to work", "Accommodation in Spain"],
    timeline: "1-3 months processing",
    color: "olive",
  },
  "self-employed": {
    name: "Autónomo (Self-Employed) Visa",
    icon: Users,
    description: "For freelancers and entrepreneurs who want to work independently in Spain.",
    requirements: ["Business plan", "Professional qualifications", "Proof of funds", "Market viability study"],
    timeline: "3-6 months processing",
    color: "navy",
  },
  "student": {
    name: "Student Visa",
    icon: GraduationCap,
    description: "For those enrolling in Spanish educational institutions for study programs.",
    requirements: ["Acceptance letter from institution", "Proof of funds", "Health insurance", "Accommodation proof"],
    timeline: "1-2 months processing",
    color: "secondary",
  },
  "golden": {
    name: "Golden Visa",
    icon: FileText,
    description: "Investment-based residency for high-net-worth individuals making significant investments in Spain.",
    requirements: ["Real estate investment €500k+", "OR Business investment €1M+", "OR Government bonds €2M+"],
    timeline: "2-3 months processing",
    color: "primary",
  },
};

function getRecommendedVisa(answers: Record<string, string>): keyof typeof visaResults {
  const { purpose, income, employment } = answers;

  if (purpose === "study") return "student";
  if (purpose === "retire" || employment === "retired") return "non-lucrative";
  if (income === "over-100k" && (purpose === "entrepreneur" || employment === "business-owner")) return "golden";
  if (purpose === "work-remote" || employment === "employed-remote") return "digital-nomad";
  if (purpose === "entrepreneur" || employment === "freelancer" || employment === "business-owner") return "self-employed";
  
  return "non-lucrative";
}

export default function VisaQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [showEmailCapture, setShowEmailCapture] = useState(false);

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  const handleAnswer = (optionId: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: optionId });
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
    setShowEmailCapture(false);
  };

  const recommendedVisa = showResults ? visaResults[getRecommendedVisa(answers)] : null;

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
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                Visa Quick Quiz
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Find Your Perfect Spanish Visa
              </h1>
              <p className="text-muted-foreground text-lg">
                Answer 5 quick questions to get an instant visa recommendation.
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
                      <span>Question {currentStep + 1} of {questions.length}</span>
                      <span>{Math.round(progress)}% Complete</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>

                  {/* Question */}
                  <div className="bg-card rounded-2xl border border-border p-8">
                    <h2 className="text-xl md:text-2xl font-semibold text-card-foreground mb-6">
                      {currentQuestion.question}
                    </h2>

                    <div className="space-y-3">
                      {currentQuestion.options.map((option) => {
                        const isSelected = answers[currentQuestion.id] === option.id;
                        return (
                          <button
                            key={option.id}
                            onClick={() => handleAnswer(option.id)}
                            className={cn(
                              "w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left",
                              isSelected
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50 hover:bg-muted/50"
                            )}
                          >
                            {option.icon && (
                              <div className={cn(
                                "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                                isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                              )}>
                                <option.icon className="w-6 h-6" />
                              </div>
                            )}
                            <div className="flex-1">
                              <div className="font-medium text-card-foreground">
                                {option.label}
                              </div>
                              {option.description && (
                                <div className="text-sm text-muted-foreground">
                                  {option.description}
                                </div>
                              )}
                            </div>
                            {isSelected && (
                              <CheckCircle className="w-5 h-5 text-primary shrink-0" />
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
                        variant="hero"
                        onClick={handleNext}
                        disabled={!answers[currentQuestion.id]}
                      >
                        {currentStep === questions.length - 1 ? "See Results" : "Next"}
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
                  {/* Result Card */}
                  <div className="bg-card rounded-2xl border border-border overflow-hidden">
                    <div className="bg-gradient-to-r from-primary to-terracotta-dark p-8 text-center">
                      <div className="w-20 h-20 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4">
                        {recommendedVisa && <recommendedVisa.icon className="w-10 h-10 text-primary-foreground" />}
                      </div>
                      <h2 className="text-2xl font-bold text-primary-foreground mb-2">
                        Your Recommended Visa
                      </h2>
                      <h3 className="text-3xl font-bold text-primary-foreground">
                        {recommendedVisa?.name}
                      </h3>
                    </div>

                    <div className="p-8">
                      <p className="text-muted-foreground text-lg mb-6">
                        {recommendedVisa?.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-card-foreground mb-3">
                          Key Requirements:
                        </h4>
                        <ul className="space-y-2">
                          {recommendedVisa?.requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-2 text-muted-foreground">
                              <CheckCircle className="w-5 h-5 text-olive shrink-0 mt-0.5" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-5 h-5" />
                        <span>{recommendedVisa?.timeline}</span>
                      </div>
                    </div>
                  </div>

                  {/* Email Capture */}
                  {!showEmailCapture ? (
                    <div className="bg-muted/50 rounded-2xl p-8 text-center">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Want the Complete Visa Guide?
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Get a detailed PDF guide with step-by-step instructions, document checklists, and timeline for your recommended visa.
                      </p>
                      <Button variant="hero" size="lg" onClick={() => setShowEmailCapture(true)}>
                        Get Free Guide
                      </Button>
                    </div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-muted/50 rounded-2xl p-8"
                    >
                      <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                        Where should we send your guide?
                      </h3>
                      <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input
                          type="email"
                          placeholder="your@email.com"
                          className="flex-1 px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <Button variant="hero" size="lg" type="submit">
                          Send Guide
                        </Button>
                      </form>
                      <p className="text-xs text-muted-foreground text-center mt-3">
                        No spam, ever. Unsubscribe anytime.
                      </p>
                    </motion.div>
                  )}

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="outline" size="lg" onClick={handleRestart}>
                      Take Quiz Again
                    </Button>
                    <Button variant="hero" size="lg">
                      Talk to an Expert
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
