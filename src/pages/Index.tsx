import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWidget } from "@/components/layout/FloatingWidget";
import { Hero } from "@/components/home/Hero";
import { ValuePropSection } from "@/components/home/ValuePropSection";
import { HurdlesSection } from "@/components/home/HurdlesSection";
import { ToolsSection } from "@/components/home/ToolsSection";
import { MediaSection } from "@/components/home/MediaSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { ResourcesSection } from "@/components/home/ResourcesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ComparisonTable } from "@/components/home/ComparisonTable";
import { CTASection } from "@/components/home/CTASection";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ValuePropSection />
        <HurdlesSection />
        <ToolsSection />
        <MediaSection />
        <NewsletterSection />
        <ResourcesSection />
        <ProcessSection />
        <ComparisonTable />
        <CTASection />
        <Testimonials />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
      <FloatingWidget />
    </div>
  );
};

export default Index;
