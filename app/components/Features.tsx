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
    <section className="bg-[#FFF1F2] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-[45px] md:text-[45px] font-bold font-[Baloo_2] text-[#384150] mb-5 leading-[1.0]">
          Made for autopilot, designed <br />
          for full control
        </h2>

        <p className="text-[#636363] text-[18px] font-[Inter] font-light max-w-2xl mx-auto mb-16 leading-[1.6]">
          Our mission is to automate SEO end to end, while still giving you the option to
          stay in control and go deeper when needed.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {features.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl pt-[40px] px-[30px] text-left shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-[25px] font-[Baloo_2] font-bold text-[#384150] mb-[10px]">
                {item.title}
              </h3>

              <p className="text-[#374151] text-[16px] font-[Inter] mb-6">
                {item.desc}
              </p>

              <div className="flex justify-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-[310px] md:w-[287px] pt-[30px] pb-[20px]"
                />
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}