import { Check } from "lucide-react";

type ContentItem = {
  title: string;
  desc: string;
};

export default function ContentSection({ content }: { content: ContentItem[] }) {
  return (
    <section className="bg-[#FFFFFF] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <div className="flex justify-center mb-10">
          <img
            src="/content1.png"
            alt="content"
            className="w-[400] md:w-[400] h-[420]"
          />
        </div>

        <h2 className="text-[45px] md:text-[45px] font-[Baloo_2] font-bold text-[#384150] mb-8 leading-[1.0]">
          Writes content that is loved by <br />
          humans, Google and ChatGPT
        </h2>

        <div className="text-[#636363] text-[18px] font-[Inter] font-light space-y-6 text-left max-w-[650px] mx-auto mb-10">
          <p>The content we create is designed to perform across the entire search ecosystem.</p>
          <p>Every piece of content is written to be genuinely useful for visitors.</p>
          <p>
            While sending clear relevance signals to search engines and AI-powered assistants,
            so your pages stay visible today and resilient as search continues to evolve.
          </p>
        </div>

        <div className="max-w-2xl mx-auto text-left text-[18px] text-[#5E5B71] font-[Inter] space-y-4">
          {content.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <Check size={18} className="text-[#37D144] mt-1" />
              <p className="text-[#384150]">
                <span className="text-black font-bold">{item.title}</span>{" "}
                <span className="text-[#636363]">{item.desc}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-[#57CE5E] text-white px-12 py-4 rounded-full text-[20px] font-[Inter] font-semibold cursor-pointer">
            Get SEO on autopilot →
          </button>

          <p className="text-[14px] text-[#333333] font-[Inter] mt-3 italic">
            Don't waste time doing SEO yourself
          </p>
        </div>

      </div>
    </section>
  );
}