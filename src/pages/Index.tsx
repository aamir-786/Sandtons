import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWidget } from "@/components/layout/FloatingWidget";
import { Hero } from "@/components/home/Hero";
import { HurdlesSection } from "@/components/home/HurdlesSection";
import { ToolsSection } from "@/components/home/ToolsSection";
import { MediaSection } from "@/components/home/MediaSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ComparisonTable } from "@/components/home/ComparisonTable";
import { ValueProposition } from "@/components/home/ValueProposition";
import { ResourcesSection } from "@/components/home/ResourcesSection";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <HurdlesSection />
        <ToolsSection />
        <ComparisonTable />
        <MediaSection />
        <NewsletterSection />
        <ProcessSection />
        <ValueProposition />
        <ResourcesSection />
        <Testimonials />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingWidget />
    </div>
  );
};

export default Index;
