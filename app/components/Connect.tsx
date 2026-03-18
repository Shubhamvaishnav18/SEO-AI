export default function Connect() {
  return (
    <section className="bg-[#F9F9F9] py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <p className="inline-block bg-white text-[#384150] text-[12px] font-[Inter] px-[30px] py-[6px] rounded-full shadow-lg border border-gray-300 mb-5">
          EASY TO CONNECT
        </p>

        <h2 className="text-xl md:text-[45px] font-[Baloo_2] font-bold text-[#384150] mb-4 leading-tight">
          Auto-publish to your website
        </h2>

        <p className="text-[#636363] text-[18px] font-[Inter] font-light max-w-2xl mx-auto mb-12">
          Connects to almost any CMS and automatically publishes optimized content.
          <br />
          Complete with internal links, meta data and images.
        </p>

        <div className="flex justify-center">
          <img
            src="/connect1.png"
            alt="connect"
            className="w-[650px] h-[426px]"
          />
        </div>

      </div>
    </section>

  );
}