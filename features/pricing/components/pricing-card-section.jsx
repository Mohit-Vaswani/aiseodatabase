'use client';

import { useState } from 'react';
import { GradientButton } from '@/components/ui';

export default function PricingCardSection() {
  const [billing, setBilling] = useState('yearly');
  const [sliderValue, setSliderValue] = useState(33); // Slider value as percentage
  const [contractors, setContractors] = useState(10); // Number of contractors

  return (
    <section className="bg-darkBlue-900">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl border border-white/30 p-10 max-w-2xl mx-auto bg-darkBlue-900 relative z-50">
          <div className="flex items-start justify-between mb-10">
            <div>
              <p className="text-white text-3xl font-semibold mb-2">Custom</p>
              <p className="text-white text-opacity-70 text-sm">Choose resources for your needs</p>
            </div>
            <div className="p-1 rounded-full border border-white/10 bg-white/5 flex items-center gap-4">
              <button
                className={`py-1 px-3 text-white text-sm font-medium ${
                  billing === 'monthly'
                    ? 'rounded-full border border-white/20 bg-white/10'
                    : ''
                }`}
                onClick={() => setBilling('monthly')}
              >
                Monthly
              </button>
              <button
                className={`flex-1 py-1 px-3 flex items-center justify-center gap-2 ${
                  billing === 'yearly'
                    ? 'rounded-full border border-white/20 bg-white/10'
                    : ''
                }`}
                onClick={() => setBilling('yearly')}
              >
                <span className="text-white text-sm font-medium">Yearly</span>
                <span className="text-xs text-blue-300">10% OFF</span>
              </button>
            </div>
          </div>

          <div className="flex items-end gap-1 flex-wrap mb-5">
            <h2 className="text-white text-5xl font-semibold">
              ${billing === 'yearly' ? Math.round(contractors * 15 * 0.9) : contractors * 15}
            </h2>
            <span className="text-white text-opacity-50 mb-1">/{billing === 'yearly' ? 'year' : 'month'}</span>
          </div>

          {/* Progress Bar Slider */}
          <div className="relative h-3 mb-5">
            <div className="absolute inset-0 flex h-full pointer-events-none">
              <div
                className="bg-blue-500 rounded-tl-3xl rounded-bl-3xl transition-all duration-200"
                style={{ width: `${sliderValue}%` }}
              ></div>
              <div
                className="bg-white/20 rounded-tr-3xl rounded-br-3xl flex-1"
              ></div>
            </div>
            <div
              className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 pointer-events-none transition-all duration-200"
              style={{ left: `${sliderValue}%` }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#6691FF" stroke="#0F0F2E" strokeWidth="4"></circle>
                <circle cx="12" cy="12" r="4" fill="white"></circle>
              </svg>
            </div>
            <input
              type="range"
              min="1"
              max="100"
              value={sliderValue}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                setSliderValue(value);
                // Calculate contractors based on slider (1-50 range)
                setContractors(Math.max(1, Math.round(value / 2)));
              }}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>

          <p className="text-white text-sm mb-10">{contractors} contractors</p>

          {/* CTA Button */}
          <GradientButton
            href="#"
            variant="blue"
            className="mb-8"
          >
            Get started
          </GradientButton>

          <div className="w-full h-px bg-white/10 mb-10"></div>

          {/* Features List */}
          <div className="flex flex-wrap -m-4">
            <div className="w-full lg:w-1/2 p-4">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" opacity="0.5" viewBox="0 0 20 20" fill="none">
                  <path d="M13.3334 3.54169C13.3334 4.57502 12.4917 5.41669 11.4584 5.41669H8.54175C8.02508 5.41669 7.55841 5.20835 7.21675 4.86669C6.87508 4.52502 6.66675 4.05835 6.66675 3.54169C6.66675 2.50835 7.50841 1.66669 8.54175 1.66669H11.4584C11.9751 1.66669 12.4417 1.87502 12.7834 2.21669C13.1251 2.55835 13.3334 3.02502 13.3334 3.54169Z" fill="white" />
                  <path d="M15.6916 4.1917C15.4999 4.03336 15.2833 3.90836 15.0499 3.8167C14.8083 3.72503 14.5666 3.9167 14.5166 4.1667C14.2333 5.5917 12.9749 6.6667 11.4583 6.6667H8.54159C7.70825 6.6667 6.92492 6.3417 6.33325 5.75003C5.89992 5.3167 5.59992 4.7667 5.48325 4.17503C5.43325 3.92503 5.18325 3.72503 4.94159 3.82503C3.97492 4.2167 3.33325 5.10003 3.33325 6.87503V15C3.33325 17.5 4.82492 18.3334 6.66659 18.3334H13.3333C15.1749 18.3334 16.6666 17.5 16.6666 15V6.87503C16.6666 5.5167 16.2916 4.68336 15.6916 4.1917ZM6.66659 10.2084H9.99992C10.3416 10.2084 10.6249 10.4917 10.6249 10.8334C10.6249 11.175 10.3416 11.4584 9.99992 11.4584H6.66659C6.32492 11.4584 6.04159 11.175 6.04159 10.8334C6.04159 10.4917 6.32492 10.2084 6.66659 10.2084ZM13.3333 14.7917H6.66659C6.32492 14.7917 6.04159 14.5084 6.04159 14.1667C6.04159 13.825 6.32492 13.5417 6.66659 13.5417H13.3333C13.6749 13.5417 13.9583 13.825 13.9583 14.1667C13.9583 14.5084 13.6749 14.7917 13.3333 14.7917Z" fill="white" />
                </svg>
                <span className="text-white">Customized invoices</span>
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-4">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" opacity="0.5" viewBox="0 0 20 20" fill="none">
                  <path d="M14.1667 2.91669H5.83341C3.33341 2.91669 1.66675 4.16669 1.66675 7.08335V12.9167C1.66675 15.8334 3.33341 17.0834 5.83341 17.0834H14.1667C16.6667 17.0834 18.3334 15.8334 18.3334 12.9167V7.08335C18.3334 4.16669 16.6667 2.91669 14.1667 2.91669ZM6.66675 14.7917H4.16675C3.82508 14.7917 3.54175 14.5084 3.54175 14.1667C3.54175 13.825 3.82508 13.5417 4.16675 13.5417H6.66675C7.00841 13.5417 7.29175 13.825 7.29175 14.1667C7.29175 14.5084 7.00841 14.7917 6.66675 14.7917ZM10.0001 12.5C8.61675 12.5 7.50008 11.3834 7.50008 10C7.50008 8.61669 8.61675 7.50002 10.0001 7.50002C11.3834 7.50002 12.5001 8.61669 12.5001 10C12.5001 11.3834 11.3834 12.5 10.0001 12.5ZM15.8334 6.45835H13.3334C12.9917 6.45835 12.7084 6.17502 12.7084 5.83335C12.7084 5.49169 12.9917 5.20835 13.3334 5.20835H15.8334C16.1751 5.20835 16.4584 5.49169 16.4584 5.83335C16.4584 6.17502 16.1751 6.45835 15.8334 6.45835Z" fill="white" />
                </svg>
                <span className="text-white">Enable multiple payments</span>
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-4">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" opacity="0.5" viewBox="0 0 20 20" fill="none">
                  <path d="M6.875 4.79169C6.53333 4.79169 6.25 4.50835 6.25 4.16669V1.66669C6.25 1.32502 6.53333 1.04169 6.875 1.04169C7.21667 1.04169 7.5 1.32502 7.5 1.66669V4.16669C7.5 4.50835 7.21667 4.79169 6.875 4.79169Z" fill="white" />
                  <path d="M13.125 4.79169C12.7833 4.79169 12.5 4.50835 12.5 4.16669V1.66669C12.5 1.32502 12.7833 1.04169 13.125 1.04169C13.4667 1.04169 13.75 1.32502 13.75 1.66669V4.16669C13.75 4.50835 13.4667 4.79169 13.125 4.79169Z" fill="white" />
                  <path d="M10 11.7417C10.4333 11.7417 10.75 11.4834 10.75 11.075C10.75 10.6584 10.4333 10.4167 10 10.4167C9.56667 10.4167 9.25 10.6584 9.25 11.075C9.25 11.4834 9.56667 11.7417 10 11.7417Z" fill="white" />
                  <path d="M10 14.1666C10.5247 14.1666 10.9501 13.8197 10.9501 13.3916C10.9501 12.9636 10.5247 12.6166 10 12.6166C9.47538 12.6166 9.05005 12.9636 9.05005 13.3916C9.05005 13.8197 9.47538 14.1666 10 14.1666Z" fill="white" />
                  <path d="M16.3083 3.75002C15.7583 3.34169 14.9666 3.73335 14.9666 4.42502V4.50835C14.9666 5.48335 14.2666 6.38335 13.2916 6.48335C12.1666 6.60002 11.2166 5.71669 11.2166 4.61669V3.75002C11.2166 3.29169 10.8416 2.91669 10.3833 2.91669H9.61659C9.15825 2.91669 8.78325 3.29169 8.78325 3.75002V4.61669C8.78325 5.27502 8.44159 5.85835 7.92492 6.18335C7.84992 6.23335 7.76659 6.27502 7.68325 6.31669C7.60825 6.35835 7.52492 6.39169 7.43325 6.41669C7.33325 6.45002 7.22492 6.47502 7.10825 6.48335C6.97492 6.50002 6.84159 6.50002 6.70825 6.48335C6.59159 6.47502 6.48325 6.45002 6.38325 6.41669C6.29992 6.39169 6.21659 6.35835 6.13325 6.31669C6.04992 6.27502 5.96659 6.23335 5.89159 6.18335C5.36659 5.81669 5.03325 5.18335 5.03325 4.50835V4.42502C5.03325 3.78335 4.34992 3.40002 3.80825 3.67502C3.79992 3.68335 3.79159 3.68335 3.78325 3.69169C3.74992 3.70835 3.72492 3.72502 3.69159 3.75002C3.66659 3.77502 3.63325 3.79169 3.60825 3.81669C3.37492 4.00002 3.16659 4.20835 2.99159 4.43335C2.89992 4.53335 2.82492 4.64169 2.75825 4.75002C2.74992 4.75835 2.74159 4.76669 2.73325 4.78335C2.65825 4.89169 2.59159 5.01669 2.53325 5.13335C2.51659 5.15002 2.50825 5.15835 2.50825 5.17502C2.45825 5.27502 2.40825 5.37502 2.37492 5.48335C2.34992 5.52502 2.34159 5.55835 2.32492 5.60002C2.27492 5.72502 2.24159 5.85002 2.20825 5.97502C2.17492 6.09169 2.14992 6.21669 2.13325 6.34169C2.11659 6.43335 2.10825 6.52502 2.09992 6.62502C2.09159 6.74169 2.08325 6.85835 2.08325 6.97502V14.275C2.08325 16.5167 3.89992 18.3334 6.14159 18.3334H13.8583C16.0999 18.3334 17.9166 16.5167 17.9166 14.275V6.97502C17.9166 5.65002 17.2833 4.49169 16.3083 3.75002ZM9.99992 15.2084C8.70825 15.2084 7.91659 14.5667 7.91659 13.5334C7.91659 12.9667 8.20825 12.475 8.71659 12.1834C8.34992 11.925 8.10825 11.5417 8.10825 11.0167C8.10825 9.93335 8.97492 9.37502 9.99992 9.37502C11.0249 9.37502 11.8833 9.93335 11.8833 11.0167C11.8833 11.5417 11.6499 11.925 11.2749 12.1834C11.7916 12.475 12.0833 12.9667 12.0833 13.5334C12.0833 14.5667 11.2833 15.2084 9.99992 15.2084Z" fill="white" />
                </svg>
                <span className="text-white">Automated reminders</span>
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-4">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" opacity="0.5" viewBox="0 0 20 20" fill="none">
                  <path d="M17.5 18.9583H2.5C2.15833 18.9583 1.875 18.675 1.875 18.3333C1.875 17.9916 2.15833 17.7083 2.5 17.7083H17.5C17.8417 17.7083 18.125 17.9916 18.125 18.3333C18.125 18.675 17.8417 18.9583 17.5 18.9583Z" fill="white" />
                  <path d="M4.66667 6.98334H3.33333C2.875 6.98334 2.5 7.35834 2.5 7.81667V15C2.5 15.4583 2.875 15.8333 3.33333 15.8333H4.66667C5.125 15.8333 5.5 15.4583 5.5 15V7.81667C5.5 7.35 5.125 6.98334 4.66667 6.98334Z" fill="white" />
                  <path d="M10.6667 4.32501H9.33333C8.875 4.32501 8.5 4.70001 8.5 5.15835V15C8.5 15.4583 8.875 15.8333 9.33333 15.8333H10.6667C11.125 15.8333 11.5 15.4583 11.5 15V5.15835C11.5 4.70001 11.125 4.32501 10.6667 4.32501Z" fill="white" />
                  <path d="M16.6667 1.66669H15.3333C14.875 1.66669 14.5 2.04169 14.5 2.50002V15C14.5 15.4584 14.875 15.8334 15.3333 15.8334H16.6667C17.125 15.8334 17.5 15.4584 17.5 15V2.50002C17.5 2.04169 17.125 1.66669 16.6667 1.66669Z" fill="white" />
                </svg>
                <span className="text-white">Helpful reports</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}