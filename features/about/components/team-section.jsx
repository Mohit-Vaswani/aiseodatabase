import { TeamCard, GradientButton } from '@/components/ui';
import teamMembers from '@/data/team-members.json';

export default function TeamSection() {
  return (
    <section className="bg-darkBlue-900 pb-56 pt-32">
      <div className="container mx-auto px-4">
        <p className="uppercase text-sweetBlue-400 tracking-widest text-xs mb-4">diverse and world-class</p>
        <div className="flex justify-between items-center flex-wrap gap-4 mb-20">
          <h1 className="font-heading text-white text-4xl md:text-5xl font-bold">Meet our team</h1>
          <div className="flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M9.27232 5.86195L9.50687 6.42602L10.1158 6.47481L13.4188 6.73946L10.9024 8.89524L10.4387 9.29254L10.5803 9.88656L11.3486 13.1096L8.52091 11.3826L7.99968 11.0642L7.47844 11.3826L4.65075 13.1096L5.41909 9.88656L5.56069 9.29254L5.09694 8.89524L2.58054 6.73946L5.88355 6.47481L6.49248 6.42602L6.72703 5.86195L7.99968 2.80137L9.27232 5.86195ZM4.581 13.4022L4.58109 13.4019L4.581 13.4022ZM2.28065 6.76349L2.28088 6.76347L2.28065 6.76349Z"
                  fill="#6691FF"
                  stroke="#6691FF"
                  strokeWidth="2"
                />
              </svg>
              <p className="text-blue-500 font-semibold">We are hiring!</p>
            </div>
            <GradientButton href="#" variant="white">
              <span className="flex items-center">
                <span className="mr-2">Careers</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M9.43032 8.28857L9.4303 8.28856L9.42602 8.29284L6.45312 11.2657V8.20662V4.7275L8.11268 6.38706L9.42602 7.70039C9.59121 7.86558 9.58501 8.13574 9.43032 8.28857Z" fill="black" stroke="currentColor" strokeWidth="2"></path>
                </svg>
              </span>
            </GradientButton>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="flex flex-wrap -m-4">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              position={member.position}
              image={member.image}
              socialLinks={member.socialLinks}
            />
          ))}
        </div>
      </div>
    </section>
  );
}