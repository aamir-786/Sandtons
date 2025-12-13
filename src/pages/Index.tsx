import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWidget } from "@/components/layout/FloatingWidget";
import { Hero } from "@/components/home/Hero";
import { ToolsSection } from "@/components/home/ToolsSection";
import { ValueProposition } from "@/components/home/ValueProposition";
import { Testimonials } from "@/components/home/Testimonials";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ToolsSection />
        <ValueProposition />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
      <FloatingWidget />
    </div>
  );
};

export default Index;
