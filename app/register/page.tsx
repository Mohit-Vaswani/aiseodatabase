import AnnouncementBar from '@/components/layout/announcement-bar';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import CTASection from '@/components/common/cta-section';
import RegisterFormSection from '@/features/auth/components/register-form-section';

export default function RegisterPage() {
  return (
    <div className="bg-body text-body font-body antialiased">
      <AnnouncementBar />
      <section className="bg-darkBlue-900">
        <Header variant="other" />
      </section>

      <RegisterFormSection />

      <CTASection />
      <Footer />
    </div>
  );
}