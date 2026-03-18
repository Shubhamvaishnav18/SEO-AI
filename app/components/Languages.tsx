export default function Languages({ languages }: any) {
  return (

    <section className="bg-white py-24 px-6 text-center">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-5xl font-bold text-[#384150] mb-16">
          Works across 50+ languages
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-y-2 text-[#384150] text-md">

          {languages.map((l: string, i: number) => (
            <p key={i} className="text-gray-700 text-start">
              {l}
            </p>
          ))}

        </div>

      </div>
    </section>
  );
}