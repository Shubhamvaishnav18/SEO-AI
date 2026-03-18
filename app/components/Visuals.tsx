export default function Visuals() {
  return (
    <section className="bg-[#FFFFFF] py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <p className="inline-block bg-white text-gray-700 text-xs px-6 py-2 rounded-full shadow border border-gray-300 mb-6">
          PERSONALIZED VISUALS
        </p>

        <h2 className="text-2xl md:text-4xl font-bold text-[#384150] mb-6 leading-tight">
          AI images that don't look like AI!
        </h2>

        <p className="text-[#636363] text-md max-w-2xl mx-auto mb-8">
          Articles will be supported with images featuring your key reference visuals.
        </p>

        <div className="text-[#636363] text-md space-y-2 mb-16">
          <p>1. Upload your reference images</p>
          <p>2. AI extracts visual elements from those images</p>
          <p>3. New images uses your visual elements where relevant</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">

          <div className="text-center">
            <img
              src="/reference.png"
              alt="reference"
              className="w-[700px] h-[300px]"
            />
          </div>

        </div>

      </div>
    </section>
  );
}