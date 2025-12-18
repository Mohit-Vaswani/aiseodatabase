import AnnouncementBar from '@/components/layout/announcement-bar';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import CTASection from '@/components/common/cta-section';
import ContactFormSection from '@/features/contact/components/contact-form-section';

export default function ContactPage() {
  return (
    <div className="bg-body text-body font-body antialiased">
      <AnnouncementBar />
      <section className="bg-darkBlue-900">
        <Header variant="other" />
      </section>

      <ContactFormSection />

      <CTASection />
      <Footer />
    </div>
  );
}