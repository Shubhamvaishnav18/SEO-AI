import Image from "next/image";

export default function Hero() {
  return (
    <>
      <main className="min-h-screen bg-[linear-gradient(41deg,#f74848_1%,#f75c47_36%,#f6713c_66%,#f9ac8d_92%)] text-white p-0 m-0">

        <section className="text-center pt-36 md:pt-[102px] px-6">
          <p className="inline-block bg-[#fdf5c50d] text-[#384150] font-[Inter] text-[12px] px-[30px] py-[6px] rounded-full mb-5 shadow-[0px_2px_10px_rgba(0,0,0,0.16)]">
            RANKED #1 FOR AI SEO
          </p>

          <h1 className="text-4xl md:text-[66px] font-[Baloo_2] font-bold leading-[1.0] tracking-[1.0px] mb-6">
            SEO on autopilot for <br /> small businesses
          </h1>

          <p className="text-[18px] text-white font-[Inter] font-semibold max-w-2xl mx-auto mb-9">
            AI that plans, produces, and publishes SEO content on your website on
            autopilot - so traffic grows month by month.
          </p>

          <button className="bg-[#57ce5e] px-27 py-[14px] rounded-full text-[20px] font-[Inter] font-semibold mb-3 cursor-pointer">
            Try it for $1
          </button>

          <p className="text-[16px] text-black font-[Baloo_2] italic opacity-70">
            ✓ 14 day money back guarantee &nbsp; ✓ Setup in 10 minutes &nbsp; ✓ Human support
          </p>

          <div className="mt-[-20px] mb-[-80px] flex justify-center">
            <Image
              src="/hero1.png"
              alt="Hero img"
              width={777}
              height={565}
            />
          </div>
        </section>
      </main>

      <section className="bg-[#fff] py-25 px-6">
        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-3xl md:text-[45px] font-bold font-[baloo_2] text-[#384150] mb-10 leading-[1.0]">
            Focus on your business. <br />
            AI handles your SEO.
          </h2>

          <div className="text-[#636363] text-[18px] font-[Inter] space-y-5 text-left max-w-2xl ml-25px mx-auto">

            <p className="font-light">
              Running a business already demands your full attention.
            </p>

            <p>
              <span className="bg-[#FCE500] text-[18px] text-[#636363] font-[Inter] italic font-light py-1">
                SEO shouldn’t be another task on your to-do list.
              </span>
            </p>

            <p className="text-[#636363] font-light">
              Yet{" "}
              <span className="font-semibold italic text-[18px] text-black">
                without consistent optimization and fresh content, your website stays invisible
              </span>{" "}
              while competitors take the traffic.
            </p>

            <p className="text-[18px] text-[#636363] font-[Inter] font-light">
              That’s why we built SEO.AI.
            </p>

            <p className="font-semibold text-[18px] italic font-light text-black">
              To handle keyword research, content creation, and publishing for you, automatically.
            </p>

            <p className="text-[18px] text-[#636363] font-[Inter] font-light mb-5">
              So you can focus on growing your business.
            </p>

          </div>
        </div>
      </section>
    </>
  );
}