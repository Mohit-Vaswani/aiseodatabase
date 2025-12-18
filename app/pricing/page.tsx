import AnnouncementBar from '@/components/layout/announcement-bar';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import CTASection from '@/components/common/cta-section';
import PricingHeroSection from '@/features/pricing/components/pricing-hero-section';
import PricingCardSection from '@/features/pricing/components/pricing-card-section';
import TestimonialsSection from '@/features/pricing/components/testimonials-section';

export default function PricingPage() {
  return (
    <div className="bg-body text-body font-body antialiased">
      <AnnouncementBar />
      <section className="bg-darkBlue-900">
        <Header variant="other" />
      </section>

      <PricingHeroSection />
      <PricingCardSection />
      <TestimonialsSection />

      <CTASection />
      <Footer />
    </div>
  );
}