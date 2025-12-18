import AnnouncementBar from '@/components/layout/announcement-bar';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import CTASection from '@/components/common/cta-section';
import AboutHeroSection from '@/features/about/components/hero-section';
import TeamSection from '@/features/about/components/team-section';

export default function AboutPage() {
  return (
    <div className="bg-body text-body font-body antialiased">
      <AnnouncementBar />
      <section className="bg-darkBlue-900">
        <Header variant="other" />
      </section>

      <AboutHeroSection />
      <TeamSection />

      <CTASection />
      <Footer />
    </div>
  );
}