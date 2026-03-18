import {
  Image as ImageIcon,
  Link,
  Upload,
  Megaphone,
  Globe,
  Search,
  BarChart,
  Calendar,
  Database,
  LineChart,
  Plug,
  Pencil,
  Sliders,
  Brain,
} from "lucide-react";

export default function Process() {
  return (
    <section className="bg-[#FAF4B6] py-17 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <p className="inline-block bg-white text-gray-700 text-xs px-8 py-2 rounded-full shadow mb-6 border border-[#BEBEBE] shadow-md">
            THE PROCESS
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#384150] mb-6">
            This is what hands-off <br /> SEO looks like
          </h2>

          <p className="text-[#71716B] text-md max-w-xl mx-auto mb-16">
            AI that plans, produces, and publishes SEO content on your website on
            autopilot - so that your traffic grows month by month.
          </p>

          <div className="grid md:grid-cols-3 gap-10">

            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="bg-[#f3f3f3]">
                <img src="/process1.png" alt="process1" className="mx-auto" />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-[#384150] mb-2">
                  AI handles keyword research
                </h3>
                <p className="text-[#6b7280]">
                  AI finds the best keywords for your business using search data and topic relevance.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="bg-[#f3f3f3]">
                <img src="/process2.png" alt="process2" className="mx-auto" />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-[#384150] mb-2">
                  AI writes content Google & ChatGPT love
                </h3>
                <p className="text-[#6b7280]">
                  Researched, structured content written to follow modern SEO best practices.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="bg-[#f3f3f3]">
                <img src="/process3.png" alt="process3" className="mx-auto" />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-[#384150] mb-2">
                  Backlink exchange boosts your authority
                </h3>
                <p className="text-[#6b7280]">
                  Automatically get you links from real, topic-relevant websites - not spam networks.
                </p>
              </div>
            </div>

          </div>

          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4 mt-12 text-center">
            {[
              { label: "Auto Images", icon: <ImageIcon size={16} /> },
              { label: "Internal Linking", icon: <Link size={16} /> },
              { label: "Auto Publishing", icon: <Upload size={16} /> },
              { label: "Brand Voices", icon: <Megaphone size={16} /> },
              { label: "+50 Languages", icon: <Globe size={16} /> },
              { label: "Auto Research", icon: <Search size={16} /> },
              { label: "SEO Benchmarking", icon: <BarChart size={16} /> },
              { label: "Content Calendar", icon: <Calendar size={16} /> },
              { label: "Meta Data", icon: <Database size={16} /> },
              { label: "SEO Analytics", icon: <LineChart size={16} /> },
              { label: "CMS Integrations", icon: <Plug size={16} /> },
              { label: "AI Article Editor", icon: <Pencil size={16} /> },
              { label: "Custom Instructions", icon: <Sliders size={16} /> },
              { label: "AI Memory", icon: <Brain size={16} /> },
            ].map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-2 bg-[#FAF4B6] px-4 py-2 rounded-lg text-sm text-[#384150] border border-[#BEBEBE]"
              >
                {item.icon}
                {item.label}
              </span>
            ))}
          </div>

          <div className="mt-16">
            <button className="bg-[#57CE5E] text-white px-16 py-3 rounded-full text-lg font-semibold cursor-pointer">
              Try SEO.AI now →
            </button>
            <p className="text-sm text-[#384150] mt-3">
              And try hands-off SEO for your self
            </p>
          </div>

        </div>
      </section>
  );
}