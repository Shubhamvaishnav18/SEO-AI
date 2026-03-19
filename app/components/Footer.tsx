export default function Footer() {
  return (
    <footer className="bg-[#121113] text-gray-400 py-16 px-6 min-h-[700px]">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">

          <div>
            <h3 className="text-white font-semibold text-[14px] font-[Inter] mb-4">Product</h3>
            <ul className="text-[#959595] text-[14px] font-[Inter] space-y-3 cursor-pointer">
              <li className="hover:text-[#ff4895] transition-colors duration-300 ease-in-out">Home</li>
              <li className="hover:text-[#ff4895] transition-colors duration-300 ease-in-out">Pricing</li>
              <li className="hover:text-[#ff4895] transition-colors duration-300 ease-in-out">Product Feed Optimization</li>
              <li className="hover:text-[#ff4895] transition-colors duration-300 ease-in-out">Demo</li>
              <li className="hover:text-[#ff4895] transition-colors duration-300 ease-in-out">SEO News</li>
              <li className="hover:text-[#ff4895] transition-colors duration-300 ease-in-out">Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-[14px] font-[Inter] mb-4">Resources</h3>
            <ul className="text-[#959595] text-[14px] font-[Inter] space-y-3 cursor-pointer">
              <li className="hover:text-[#ff4895] transition-colors duration-300 ease-in-out">Webinars</li>
              <li className="hover:text-[#ff4895] transition-colors duration-300 ease-in-out">On-Demand Training</li>
              <li className="hover:text-[#ff4895] transition-colors duration-300 ease-in-out">SEO Speaker</li>
              <li className="hover:text-[#ff4895] transition-colors duration-300 ease-in-out">Live Demo Sessions</li>
              <li className="hover:text-[#ff4895] transition-colors duration-300 ease-in-out">SEO Glossary</li>
              <li className="hover:text-[#ff4895] transition-colors duration-300 ease-in-out">SEO Experts</li>
              <li className="hover:text-[#ff4895] transition-colors duration-300 ease-in-out">Free AI SEO Tools</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-[14px] font-[Inter] mb-4">
              Free Tools (Popular)
            </h3>
            <ul className="text-[#959595] text-[14px] font-[Inter] space-y-3 mb-4 cursor-pointer">
              <li className="hover:text-[#ff4895] transition-colors duration-300 ease-in-out">AI Content Detector</li>
              <li className="hover:text-[#ff4895] transition-colors duration-300 ease-in-out">AI Paraphrasing Tool</li>
              <li className="hover:text-[#ff4895] transition-colors duration-300 ease-in-out">AI Title Generator</li>
              <li className="hover:text-[#ff4895] transition-colors duration-300 ease-in-out">Topic Cluster Tool</li>
            </ul>

            <h3 className="text-white font-semibold text-[14px] font-[Inter] mb-2">
              Free Tools (Staff Picks)
            </h3>
            <ul className="text-[#959595] text-[14px] font-[Inter] space-y-3 cursor-pointer">
              <li className="hover:text-[#ff4895] transition-colors duration-300 ease-in-out">AI Keyword Tool</li>
              <li className="hover:text-[#ff4895] transition-colors duration-300 ease-in-out">Internal Linking Tool</li>
              <li className="hover:text-[#ff4895] transition-colors duration-300 ease-in-out">Keyword Cannibalization</li>
              <li className="hover:text-[#ff4895] transition-colors duration-300 ease-in-out">Keyword Rank Checker</li>
              <li className="hover:text-[#ff4895] transition-colors duration-300 ease-in-out">Keyword Search Volume</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-[14px] font-[Inter] mb-4">Features</h3>
            <ul className="text-[#959595] text-[14px] font-[Inter] space-y-3 cursor-pointer">
              <li className="hover:text-[#ff4895] transition-colors duration-300 ease-in-out">Content Analysis</li>
              <li className="hover:text-[#ff4895] transition-colors duration-300 ease-in-out">Meta Descriptions</li>
              <li className="hover:text-[#ff4895] transition-colors duration-300 ease-in-out">SEO Audits</li>
              <li className="hover:text-[#ff4895] transition-colors duration-300 ease-in-out">Semantic SEO</li>
              <li className="hover:text-[#ff4895] transition-colors duration-300 ease-in-out">SEO Writing</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-[14px] font-[Inter] mb-4">Get Help</h3>
            <ul className="text-[#959595] text-[14px] font-[Inter] space-y-3 cursor-pointer">
              <li className="hover:text-[#ff4895] transition-colors duration-300 ease-in-out">Sign In</li>
              <li className="hover:text-[#ff4895] transition-colors duration-300 ease-in-out">Support & FAQ</li>
              <li className="hover:text-[#ff4895] transition-colors duration-300 ease-in-out">Terms</li>
              <li className="hover:text-[#ff4895] transition-colors duration-300 ease-in-out">Privacy Policy</li>
              <li className="hover:text-[#ff4895] transition-colors duration-300 ease-in-out">Try for FREE</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-[#3D3D3D] mt-29 pt-8 flex flex-col md:flex-row items-center justify-between">

          <div className="flex items-center gap-2 text-white font-semibold">
            <img
                  src="/footer.png"
                  alt="footer"
                  className="w-[125px] md:w-[125px] cursor-pointer"
                />
          </div>

          <p className="text-[16px] font-[Inter] text-white mt-4 md:mt-0">
            Copyright © SEO.AI | 2026
          </p>

        </div>

      </div>
    </footer>
  );
}