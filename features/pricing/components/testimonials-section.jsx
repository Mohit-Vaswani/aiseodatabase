import { TestimonialSlider } from '@/components/ui';
import testimonials from '@/data/testimonials-pricing.json';

export default function TestimonialsSection() {
  return (
    <section className="bg-darkBlue-900 py-28">
      <div className="container mx-auto px-4">
        <p className="mb-6 uppercase text-blue-400 text-xs text-center tracking-widest">
          WHAT THEY SAY ABOUT US
        </p>
        <h1 className="font-heading text-white text-center text-3xl md:text-5xl font-bold mb-20">
          Testimonials
        </h1>
        <div className="relative max-w-3xl mx-auto mb-24">
          <div className="relative z-50 rounded-3xl bg-blue-500 py-10 pl-12 pr-20">
            <div className="absolute right-8 -bottom-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="33" viewBox="0 0 44 33" fill="none">
                <path d="M26.7544 29.8238C24.3526 32.9439 19.6474 32.9439 17.2456 29.8238L1.72343 9.65996C-1.31375 5.71454 1.49884 -4.5898e-06 6.47787 -4.15452e-06L37.5221 -1.44054e-06C42.5012 -1.00526e-06 45.3138 5.71455 42.2766 9.65996L26.7544 29.8238Z" fill="#6691FF" />
              </svg>
            </div>
            <TestimonialSlider
              testimonials={testimonials}
              variant="card"
              autoPlay={true}
              autoPlayInterval={7000}
            />
          </div>
        </div>
      </div>
    </section>
  );
}