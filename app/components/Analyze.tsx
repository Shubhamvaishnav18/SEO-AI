export default function Visuals() {
  return (
    <section className="bg-[#FFF1F2] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <p className="inline-block bg-white text-gray-700 text-xs px-8 py-2 rounded-full shadow border border-gray-300 mb-6">
          ANALYZING...
        </p>

        <h2 className="text-xl md:text-4xl font-bold text-[#384150] mb-10 leading-tight">
          Crawls your entire website to <br />
          spot missing content
        </h2>

        <div className="flex justify-center mb-10">
          <img
            src="/analyze.png"
            alt="analyze"
            className="w-[380px] md:w-[420px]"
          />
        </div>

        <p className="text-[#6b7280] text-md max-w-2xl mx-auto leading-relaxed">
          We crawl your entire website to understand which topics and keywords you already cover,
          and which are missing or need additional supporting content.
        </p>

      </div>
    </section>

  );
}