import Image from 'next/image';
import { TestimonialSlider } from '@/components/ui';
import testimonials from '@/data/testimonials-login.json';

export default function AuthTestimonialsSection() {
  return (
    <div className="w-full lg:w-1/2 p-8">
      <div className="flex flex-col h-full">
        <div className="mb-auto">
          <Image
            className="mb-8"
            src="/images/cta-illustration.svg"
            alt=""
            width={400}
            height={300}
          />
        </div>

        <div className="mb-auto">
          <h2 className="font-heading text-white text-2xl font-semibold mb-6">
            What our users say
          </h2>
          <TestimonialSlider
            testimonials={testimonials}
            variant="minimal"
            autoPlay={true}
            autoPlayInterval={5000}
          />
        </div>
      </div>
    </div>
  );
}