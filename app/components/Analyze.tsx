export default function Visuals() {
  return (
    <section className="bg-[#FFF1F2] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <p className="inline-block bg-white text-[#384150] text-[12px] font-[Inter] px-[30px] py-[6px] rounded-full shadow shadow-lg border border-gray-300 mb-6">
          ANALYZING...
        </p>

        <h2 className="text-xl md:text-[45px] font-[Baloo_2] font-bold text-[#384150] mb-7 leading-[1.0]">
          Crawls your entire website to <br />
          spot missing content
        </h2>

        <div className="flex justify-center mb-5">
          <img
            src="/analyze.png"
            alt="analyze"
            className="w-[500px] md:w-[500px] h-[313px]"
          />
        </div>

        <p className="text-[#636363] text-[18px] font-[Inter] font-light max-w-2xl mx-auto leading-relaxed">
          We crawl your entire website to understand which topics and keywords you already cover,
          and which are missing or need additional supporting content.
        </p>

      </div>
    </section>

  );
}