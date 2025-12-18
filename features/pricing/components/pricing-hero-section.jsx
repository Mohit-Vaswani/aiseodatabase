import Image from 'next/image';
import clientLogos from '@/data/client-logos.json';

export default function PricingHeroSection() {
  return (
    <>
      {/* Pricing Hero Section */}
      <section className="bg-darkBlue-900 py-24">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-white text-center text-5xl font-bold mb-4">
            One pricing plan for you
          </h1>
          <p className="text-white text-center text-opacity-70 mb-16">
            Pricing that scales with your business immediately.
          </p>
        </div>

        {/* Client Logos Section */}
        <div className="border-t border-b border-white/30 py-8 relative mb-24">
          <div className="flex flex-wrap items-center justify-center -m-4">
            {clientLogos.map((logo) => (
              <div key={logo.id} className="w-full md:w-1/6 p-4">
                <Image
                  className="mx-auto"
                  src={logo.logo}
                  alt={logo.name}
                  width={120}
                  height={40}
                />
              </div>
            ))}
          </div>
          <Image
            className="absolute left-1/2 top-0 transform -translate-x-1/2"
            src="/images/pricing-gradient.svg"
            alt=""
            width={200}
            height={100}
          />
        </div>
      </section>
    </>
  );
}