export default function Footer() {
  return (
    <footer className="bg-[#121113] text-gray-400 py-16 px-6 min-h-[700px]">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">

          <div>
            <h3 className="text-white font-semibold text-[14px] font-[Inter] mb-4">Product</h3>
            <ul className="text-[#959595] text-[14px] font-[Inter] space-y-3 cursor-pointer">
              <li>Home</li>
              <li>Pricing</li>
              <li>Product Feed Optimization</li>
              <li>Demo</li>
              <li>SEO News</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-[14px] font-[Inter] mb-4">Resources</h3>
            <ul className="text-[#959595] text-[14px] font-[Inter] space-y-3 cursor-pointer">
              <li>Webinars</li>
              <li>On-Demand Training</li>
              <li>SEO Speaker</li>
              <li>Live Demo Sessions</li>
              <li>SEO Glossary</li>
              <li>SEO Experts</li>
              <li>Free AI SEO Tools</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-[14px] font-[Inter] mb-4">
              Free Tools (Popular)
            </h3>
            <ul className="text-[#959595] text-[14px] font-[Inter] space-y-3 mb-4 cursor-pointer">
              <li>AI Content Detector</li>
              <li>AI Paraphrasing Tool</li>
              <li>AI Title Generator</li>
              <li>Topic Cluster Tool</li>
            </ul>

            <h3 className="text-white font-semibold text-[14px] font-[Inter] mb-2">
              Free Tools (Staff Picks)
            </h3>
            <ul className="text-[#959595] text-[14px] font-[Inter] space-y-3 cursor-pointer">
              <li>AI Keyword Tool</li>
              <li>Internal Linking Tool</li>
              <li>Keyword Cannibalization</li>
              <li>Keyword Rank Checker</li>
              <li>Keyword Search Volume</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-[14px] font-[Inter] mb-4">Features</h3>
            <ul className="text-[#959595] text-[14px] font-[Inter] space-y-3 cursor-pointer">
              <li>Content Analysis</li>
              <li>Meta Descriptions</li>
              <li>SEO Audits</li>
              <li>Semantic SEO</li>
              <li>SEO Writing</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-[14px] font-[Inter] mb-4">Get Help</h3>
            <ul className="text-[#959595] text-[14px] font-[Inter] space-y-3 cursor-pointer">
              <li>Sign In</li>
              <li>Support & FAQ</li>
              <li>Terms</li>
              <li>Privacy Policy</li>
              <li>Try for FREE</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-[#3D3D3D] mt-29 pt-8 flex flex-col md:flex-row items-center justify-between">

          <div className="flex items-center gap-2 text-white font-semibold">
            <img
                  src="/footer.png"
                  alt="footer"
                  className="w-[125px] md:w-[125px]"
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