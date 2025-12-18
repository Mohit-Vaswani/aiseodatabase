import { GradientButton } from '@/components/ui';

export default function CareersSection() {
  return (
    <div className="rounded-3xl bg-gradient-to-t from-darkBlue-900 via-blue-700 to-blue-400 py-20 px-4">
      <p className="uppercase text-center text-sweetBlue-300 text-xs mb-4">CAREERS</p>
      <h2 className="font-heading text-white text-center text-4xl md:text-5xl font-bold mb-4">
        Join our amazing global team
      </h2>
      <p className="text-center text-white text-opacity-70 mb-10 max-w-4xl mx-auto">
        We&apos;re a small but strong team that enjoys having a lot of ownership and autonomy. We take pride in our
        work and come from places such as Pipe, AngelList, and - to name a few.
      </p>
      <div className="text-center">
        <GradientButton href="#" variant="white">
          Open positions
        </GradientButton>
      </div>
    </div>
  );
}