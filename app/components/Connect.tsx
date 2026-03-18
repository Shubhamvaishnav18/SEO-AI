export default function Connect() {
  return (
    <section className="bg-[#F9F9F9] py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <p className="inline-block bg-white text-gray-700 text-xs px-6 py-2 rounded-full shadow border border-gray-300 mb-6">
          EASY TO CONNECT
        </p>

        <h2 className="text-xl md:text-4xl font-bold text-[#384150] mb-6 leading-tight">
          Auto-publish to your website
        </h2>

        <p className="text-[#6b7280] text-md max-w-2xl mx-auto mb-12">
          Connects to almost any CMS and automatically publishes optimized content.
          <br />
          Complete with internal links, meta data and images.
        </p>

        <div className="flex justify-center">
          <img
            src="/connect.png"
            alt="connect"
            className="w-[500px] h-[450px]"
          />
        </div>

      </div>
    </section>

  );
}