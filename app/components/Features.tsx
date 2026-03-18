type FeatureItem = {
  title: string;
  desc: string;
  img: string;
};

export default function Features({
  features,
}: {
  features: FeatureItem[];
}) {
  return (
    <section className="bg-[#FFF1F2] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-[#384150] mb-6 leading-tight">
          Made for autopilot, designed <br />
          for full control
        </h2>

        <p className="text-[#6b7280] text-md max-w-xl mx-auto mb-16">
          Our mission is to automate SEO end to end, while still giving you the option to
          stay in control and go deeper when needed.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {features.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl p-6 text-left shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-bold text-[#384150] mb-2">
                {item.title}
              </h3>

              <p className="text-[#6b7280] mb-6">
                {item.desc}
              </p>

              <div className="flex justify-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-[200px] md:w-[220px]"
                />
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}