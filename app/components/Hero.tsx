import Image from "next/image";

export default function Hero() {
  return (
    <>
      <main className="min-h-screen bg-[linear-gradient(to_top_right,#f96b45_75%,#ffe5dc_130%)] text-white">

        <section className="text-center pt-28 px-6">
          <p className="inline-block bg-[#F77A47] text-[#38414F] text-sm px-8 py-1 rounded-full mb-6 shadow-lg">
            RANKED #1 FOR AI SEO
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            SEO on autopilot for <br /> small businesses
          </h1>

          <p className="text-lg text-white/90 max-w-xl mx-auto mb-8">
            AI that plans, produces, and publishes SEO content on your website on
            autopilot - so traffic grows month by month.
          </p>

          <button className="bg-[#57CE5E] px-20 py-2 rounded-full text-[25px] font-semibold hover:bg-green-600 mb-4">
            Try it for $1
          </button>

          <p className="text-sm text-[#33363B]">
            ✓ 14 day money back guarantee &nbsp; ✓ Setup in 10 minutes &nbsp; ✓ Human support
          </p>

          <div className="mt-16 flex justify-center">
            <Image
              src="/hero.png"
              alt="Hero img"
              width={700}
              height={300}
            />
          </div>
        </section>
      </main>

      <section className="bg-[#f3f3f3] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-3xl md:text-5xl font-bold text-[#384150] mb-8 leading-tight">
            Focus on your business. <br />
            AI handles your SEO.
          </h2>

          <div className="text-[#6b7280] text-lg space-y-5 text-left max-w-2xl mx-auto">

            <p>
              Running a business already demands your full attention.
            </p>

            <p>
              <span className="bg-yellow-300 px-2">
                SEO shouldn’t be another task on your to-do list.
              </span>
            </p>

            <p>
              Yet{" "}
              <span className="font-semibold text-black">
                without consistent optimization and fresh content, your website stays invisible
              </span>{" "}
              while competitors take the traffic.
            </p>

            <p>
              That’s why we built SEO.AI.
            </p>

            <p className="font-semibold text-black">
              To handle keyword research, content creation, and publishing for you, automatically.
            </p>

            <p>
              So you can focus on growing your business.
            </p>

          </div>
        </div>
      </section>
    </>
  );
}