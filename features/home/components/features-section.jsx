import Image from 'next/image';
import features from '@/data/features.json';

const FeaturesSection = () => {
  if (!features) return null;
  return (
    <section className="bg-darkBlue-900 py-28">
      <div className="container max-w-8xl mx-auto px-4">
        <h1 className="font-heading text-white text-4xl md:text-5xl font-bold mb-4 text-center">
          Why you need this database?
        </h1>
        <p className="text-white text-opacity-70 text-lg max-w-xl text-center mx-auto mb-20">
          SEO has changed. AI is changing how people search. This database helps you Rank pages faster, Get visibility in AI answers, Use AI the right way for SEO and Save hours of research.
        </p>

        {features.map((feature, index) => (
          <div key={feature.id} className={`rounded-xl px-8 md:px-12 ${feature.features.length > 0 ? 'pt-14 pb-8' : 'py-20'} ${feature.gradient} ${index < features.length - 1 ? 'mb-10' : ''}`}>
            <div className={`flex flex-wrap items-center -m-4 ${feature.features.length > 0 ? 'mb-6' : ''}`}>
              {feature.layout === 'imageRight' ? (
                <>
                  <div className="w-full lg:w-1/3 p-4">
                    <h2 className={`font-heading ${feature.textColor || 'text-white'} text-4xl md:text-5xl font-bold max-w-xs mb-6`}>
                      {feature.title}
                    </h2>
                    <p className={`${feature.textColor || 'text-white'} text-opacity-70 max-w-xs`}>
                      {feature.description}
                    </p>
                  </div>
                  <div className="w-full lg:w-2/3 p-4">
                    {feature.video ? (
                      <video
                        className="rounded-xl object-cover w-full"
                        style={{ height: '550px' }}
                        src={feature.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                      />
                    ) : (
                      <Image
                        className="rounded-xl object-cover w-full"
                        style={{ height: '550px' }}
                        src={feature.image}
                        alt=""
                        width={800}
                        height={550}
                      />
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="w-full lg:w-2/3 p-4">
                    {feature.image ? (
                      <video
                        className="rounded-xl object-cover w-full"
                        style={{ height: '550px' }}
                        src={feature.image}
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                      />
                    ) : (
                      <Image
                        className="rounded-xl object-cover w-auto"
                        style={{ height: '550px' }}
                        src={feature.image}
                        alt=""
                        width={800}
                        height={550}
                      />
                    )}
                  </div>
                  <div className="w-full lg:w-1/3 p-4">
                    <h2 className={`font-heading ${feature.textColor || 'text-white'} text-4xl md:text-5xl font-bold max-w-xs mb-6`}>
                      {feature.title}
                    </h2>
                    <p className={`${feature.textColor || 'text-white'} text-opacity-70 max-w-xs`}>
                      {feature.description}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;