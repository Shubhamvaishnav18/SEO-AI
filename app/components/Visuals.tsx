export default function Visuals() {
  return (
    <section className="bg-[#FFFFFF] py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <p className="inline-block bg-white text-[#384150] text-[12px] font-[Inter] px-[30px] py-[6px] rounded-full shadow-lg border border-gray-300 mb-5">
          PERSONALIZED VISUALS
        </p>

        <h2 className="text-2xl md:text-[45px] font-[Baloo_2] font-bold text-[#384150] mb-4 leading-tight">
          AI images that don't look like AI!
        </h2>

        <p className="text-[#636363] text-[18px] font-[Inter] font-light max-w-2xl mx-auto mb-8">
          Articles will be supported with images featuring your key reference visuals.
        </p>

        <div className="text-[#636363] text-[18px] font-[Inter] font-light space-y-1 mb-9">
          <p>1. Upload your reference images</p>
          <p>2. AI extracts visual elements from those images</p>
          <p>3. New images uses your visual elements where relevant</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">

          <div className="text-center">
            <img
              src="/reference1.png"
              alt="reference"
              className="w-[850px] h-[304px]"
            />
          </div>

        </div>

      </div>
    </section>
  );
}