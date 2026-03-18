export default function Navbar() {
  return (
    <div className="absolute top-0 left-0 w-full z-50 pt-4">
      <nav className="max-w-6xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl px-7 py-4 flex justify-between shadow">
        <div className="flex items-center gap-2 font-bold text-gray-800">
          <span className="text-orange-500">✦</span> SEO.AI
        </div>

        <div className="hidden md:flex gap-8">
          <a>Features</a>
          <a>Pricing</a>
          <a>Blog</a>
          <a>Support</a>
        </div>

        <div className="flex gap-4">
          <button>Sign in</button>
          <button className="bg-green-500 text-white px-5 py-2 rounded-full">
            Start trial
          </button>
        </div>
      </nav>
    </div>
  );
}