"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ({ faqs }: any) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#FFFFFF] py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-[45px] font-bold font-[Baloo_2] text-[#384150] mb-6">
          Frequently Asked Questions
        </h2>

        {/* Subtext */}
        <p className="text-[#333333] text-[20px] font-[Inter] mb-14 tracking-[1.2]">
          We have listed some of the most frequent questions we get asked. If your
          question is not listed here,{" "}
          <span className="text-[#1766FF] cursor-pointer">contact us</span>.
        </p>

        {/* FAQ List */}
        <div className="text-left border-t border-[#E5E7EB]">

          {faqs.map((item: any, i: number) => (
            <div key={i} className="border-b border-[#E5E7EB]">

              {/* Question */}
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center py-8 text-[20px] font-bold font-[Inter] text-[#5C626F]"
              >
                {item.q}

                <span className={`ml-2 transition-transform duration-500 ease-in-out cursor-pointer ${open === i ? "rotate-180" : "rotate-0"
                  }`}>
                  {open === i ? (
                    <ChevronUp size={22} className="text-gray-500" />
                  ) : (
                    <ChevronDown size={22} className="text-gray-500" />
                  )}
                </span>
              </button>

              {/* Answer */}
              {open === i && (
                <p className="pb-6 pr-6 text-[16px] font-[Inter] text-[#5C626F] leading-relaxed">
                  {item.a}
                </p>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}