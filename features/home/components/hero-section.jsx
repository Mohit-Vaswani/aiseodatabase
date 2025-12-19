import Image from 'next/image';
import { GradientButton } from '@/components/ui';

/**
 * HeroSection component for the homepage hero area
 * Features main heading, description, CTA button and dashboard image
 * @returns {JSX.Element} HeroSection component with hero content
 */
const HeroSection = () => {
  return (
    <div id='home' className="relative pt-24 pb-14">
      <Image
        className="absolute left-1/2 top-0 transform -translate-x-1/2"
        src="/images/hero-lines.svg"
        alt=""
        width={800}
        height={600}
      />
      <div className="relative z-50">
        <h1 className="font-heading text-white text-center text-4xl sm:text-5xl md:text-7xl font-bold max-w-sm sm:max-w-xl md:max-w-3xl mx-auto mb-6">
          AI SEO Strategies That Actually Work
        </h1>
        <p className="text-center text-white text-lg mb-12 w-auto max-w-xl flex mx-auto">
          A curated database of proven AI + SEO strategies used by builders, founders, and marketers to rank faster, grow traffic, and win in search even in the AI era.
        </p>
        <div className="mb-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Primary CTA */}
          <a
            href="#demo"
            className="group relative inline-flex items-center justify-center rounded-full px-6 py-3 text-white font-semibold text-lg
    bg-gradient-to-r from-gray-400 to-blue-500
    hover:opacity-90 transition
    shadow-lg shadow-sky-500/30"
          >
            <span className="relative z-10">Explore the Database</span>
            <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-white/80 font-medium text-lg
    border border-white/30 hover:border-white/60
    hover:bg-white/5 transition"
          >
            View Pricing
          </a>
        </div>
        <Image
          className="w-full object-cover"
          src="/images/demoimg.png"
          alt=""
          width={1200}
          height={800}
        />
      </div>
    </div>
  );
};

export default HeroSection;