export default function Languages({ languages }: any) {
  return (

    <section className="bg-white py-24 px-6 text-center">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-[45px] md:text-[45px] font-bold font-[Baloo_2] text-[#384150] mb-16 leading-[1.0]">
          Works across 50+ languages
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-6 max-w-8xl mx-auto ml-8 gap-y-2 text-[#384150] text-md">

          {languages.map((l: string, i: number) => (
            <p key={i} className="text-[16px] font-[Inter] text-[#384150] text-start leading-[2.1]">
              {l}
            </p>
          ))}

        </div>

      </div>
    </section>
  );
}