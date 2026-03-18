"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ({ faqs }: any) {
  const [open, setOpen] = useState<number | null>(0);

  return (

    <section className="bg-[#FFFFFF] py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-3xl md:text-5xl font-bold text-[#384150] mb-6">
          Frequently Asked Questions
        </h2>

        <p className="text-[#333333] text-lg mb-12">
          We have listed some of the most frequent questions we get asked. If your
          question is not listed here, <span className="text-blue-500">contact us</span>.
        </p>

        <div className="text-left divide-y">

          {faqs.map((item: any, i: number) => (
            <div key={i} className="py-5">

              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between py-3 items-center font-bold text-lg text-[#5C626F] "
              >
                {item.q}
                <span className="ml-2 transform transition-transform duration-300 cursor-pointer">
                  {open === i ? (
                    <ChevronUp size={20} className="text-gray-500" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-500" />
                  )}
                </span>
              </button>

              {open === i && (
                <p className="mt-3 text-gray-600 text-md">
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