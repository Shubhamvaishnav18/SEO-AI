"use client";

import { useState } from "react";

export default function Pricing() {
  const [sites, setSites] = useState(3);
  const getPrice = (sites: number) => {
    if (sites <= 3) return 229;
    if (sites <= 6) return 429;
    if (sites <= 10) return 749;
    return "Custom";
  };
  return (
    <section className="bg-[#FDF5C5] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-5xl font-bold text-[#384150] mb-4">
          What an SEO agency charges <br />
          $1,000 for, we deliver for $149
        </h2>

        <p className="text-[#6b7280] max-w-2xl mx-auto mb-16">
          It feels like having a dedicated SEO specialist - but instead of expensive
          consultant hours, your AI works for a low, fixed monthly fee.
        </p>

        <div className="grid md:grid-cols-2 max-w-4xl mx-auto gap-10 items-stretch">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-10 text-left border-2 border-green-500 shadow-md flex flex-col justify-between min-h-[720px]">

            <div>
              <p className="text-lg text-[#9C9C9C] mb-4 font-semibold">Single Site</p>

              <h3 className="text-4xl font-bold text-[#384150] mb-2">
                $149 <span className="text-lg font-medium">/per month</span>
              </h3>

              <p className="text-gray-500 italic mb-6">
                For one website in one language.
              </p>

              <p className="text-gray-500 mb-4">1 website in one language</p>

              <p className="text-[#374151] font-semibold mb-3">Each month your AI does:</p>

              <ul className="space-y-2 text-gray-600">
                <li>✓ Content gap analysis</li>
                <li>✓ Creates publication plan</li>
                <li>✓ Deep research on each topic</li>
                <li>✓ Writes articles</li>
                <li>✓ Inserts internal links</li>
                <li>✓ Generates featured images</li>
                <li>✓ Publish directly on your website</li>
                <li>✓ Generates relevant backlinks</li>
              </ul>

              <p className="mt-4 text-gray-500 italic">
                + Full access to AI SEO tool suite
              </p>
            </div>

            <button className="mt-8 w-full bg-[#3FD057] text-white py-4 rounded-full font-semibold hover:bg-green-600">
              TRY IT FOR $1 →
            </button>
          </div>

          <div className="bg-white rounded-2xl p-8 text-left shadow-md flex flex-col justify-between min-h-[500px] shadow-md">

            <div>
              <p className="text-lg text-[#9C9C9C] mb-4 font-semibold">Multi Site</p>

              <h3 className="text-4xl font-bold text-[#384150] mb-2">
                {typeof getPrice(sites) === "number"
                  ? `$${getPrice(sites)}`
                  : "Custom Pricing"}
                <span className="text-lg font-medium"> /per month</span>
              </h3>

              <p className="text-gray-500 italic mb-6">
                For multiple websites or multiple languages.
              </p>

              <p className="text-[#525257] mb-4">
                Up to <span className="font-semibold">{sites}</span> websites or languages
              </p>

              <input
                type="range"
                min="1"
                max="10"
                value={sites}
                onChange={(e) => setSites(Number(e.target.value))}
                style={{
                  background: `linear-gradient(to right, #22c55e ${(sites - 1) * 11.11}%, #d1d5db ${(sites - 1) * 11.11}%)`,
                }}
                className="custom-slider w-full mt-5"
              />

              <div className="flex justify-between text-xs text-gray-500 mb-6">
                <span>1</span>
                <span>3</span>
                <span>5</span>
                <span>10</span>
                <span>+10</span>
              </div>

              <p className="text-gray-600 mt-10">
                All the same features as the single website plan.
              </p>

              <p className="text-gray-600 mt-10">
                Each month, the AI colleague performs the same work for each website and language - customized every time.
              </p>
            </div>

            <button className="mt-8 w-full bg-[#5E6860] text-white py-4 rounded-full font-semibold hover:bg-[#2f3745]">
              GET STARTED →
            </button>
          </div>

        </div>

        <p className="mt-10 text-sm text-[#384150]">
          Save 40% with annual payment. All prices exclude VAT.
        </p>

      </div>
    </section>
  );
}