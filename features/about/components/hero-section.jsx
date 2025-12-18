import Image from 'next/image';
import CareersSection from './careers-section';

export default function AboutHeroSection() {
  return (
    <section className="bg-darkBlue-900 pt-24 pb-0 relative">
      <div className="container mx-auto px-4">
        <Image
          className="absolute right-0 top-0 object-cover"
          style={{ height: '600px' }}
          src="/images/about-illustration.svg"
          alt=""
          width={600}
          height={600}
        />
        <div className="relative z-50">
          <h1 className="font-heading text-white text-5xl md:text-6xl font-semibold max-w-2xl mb-56">
            We&apos;re a passionate team building the future of bookkeeping
          </h1>

          {/* Stats Section */}
          <div className="border-b border-blue-500 pb-9 mb-32">
            <div className="bg-darkBlue-900">
              <div className="flex flex-wrap items-stretch -m-4">
                <div className="w-full md:w-1/3 lg:w-1/2 p-4">
                  <div className="border-r border-transparent md:border-white md:border-white/10 flex flex-col justify-center h-full">
                    <p className="text-white text-center md:text-left text-opacity-50 mb-2">Investors</p>
                    <p className="text-white text-center md:text-left mx-auto md:mx-0 text-2xl font-semibold max-w-xs">
                      Funded by industry-leading investors
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/3 lg:w-1/4 p-4">
                  <div className="border-r border-transparent md:border-white md:border-white/10 flex flex-col justify-center h-full">
                    <p className="text-white text-opacity-50 mb-2 text-center">Team members</p>
                    <p className="text-white text-5xl font-bold text-center">110</p>
                  </div>
                </div>
                <div className="w-full md:w-1/3 lg:w-1/4 p-4">
                  <div className="flex flex-col justify-center h-full">
                    <p className="text-white text-opacity-50 mb-2 text-center">Founded in</p>
                    <p className="text-white text-5xl font-bold text-center">2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Investors and Story Section */}
          <div className="flex flex-wrap -m-4 mb-12">
            <div className="w-full lg:w-1/2 p-4">
              <div className="flex flex-col justify-end h-full">
                <p className="text-white text-xl font-medium mb-10">Our investors</p>
                <div className="flex flex-wrap gap-8 mb-10">
                  <Image className="h-6" src="/images/aurevo-logo.svg" alt="" width={100} height={24} />
                  <Image className="h-6" src="/images/syra-logo.svg" alt="" width={100} height={24} />
                  <Image className="h-6" src="/images/lume-logo.svg" alt="" width={100} height={24} />
                </div>
                <div className="flex flex-wrap gap-8">
                  <Image className="h-6" src="/images/acme-logo.svg" alt="" width={100} height={24} />
                  <Image className="h-6" src="/images/cronix-logo.svg" alt="" width={100} height={24} />
                  <Image className="h-6" src="/images/axiomatic-logo.svg" alt="" width={100} height={24} />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-4">
              <h2 className="font-heading text-white text-4xl font-semibold mb-12">Our Story</h2>
              <p className="text-white text-lg max-w-xl mb-8">
                We emerged on the scene in 2024, a visionary solution born from the collective expertise of its founders.
                United by a shared passion for redefining the bookkeeping landscape, they embarked on a journey to create
                a cutting-edge SaaS platform.
              </p>
              <p className="text-white text-lg max-w-xl">
                Four Points is more than a software; it&apos;s the culmination of years of industry insight and dedication to
                revolutionize the way businesses manage their financial records. Built on the pillars of efficiency,
                accuracy, and collaboration, Vista sets a new standard for bookkeeping solutions, empowering businesses
                to navigate their financial landscape with ease and confidence.
              </p>
            </div>
          </div>

          {/* Careers Section */}
          <CareersSection />
        </div>
      </div>
    </section>
  );
}