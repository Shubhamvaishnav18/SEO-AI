export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-[6px] bg-transparent">

      <nav
        className="
        w-[93%] max-w-[1246px]
        flex items-center justify-between
        px-[24px] py-[11px]
        rounded-[12px]
        backdrop-blur-[15px]
        bg-[#fffffff0]
        border border-[#f0f0f0]
      "
      >
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="logo"
            className="h-9 object-contain transform transition duration-300 ease-in-out hover:scale-105 cursor-pointer"
          />
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-[#000] text-[16px] font-[Inter] font-small mr-7">
          <a className="cursor-pointer tracking-[0.4px]">Features</a>
          <a className="cursor-pointer tracking-[0.4px]">Pricing</a>
          <a className="cursor-pointer tracking-[0.4px]">Blog</a>
          <a className="cursor-pointer tracking-[0.4px]">Support</a>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-7">

          {/* Sign in */}
          <button className="text-black text-[16.3px] font-medium align-center font-[Inter] hover:opacity-80">
            Sign in
          </button>

          {/* Start Trial */}
          <button
            className="
            text-white text-[16px] font-bold
            px-[29px] py-[9px]
            rounded-full
            bg-[#40d057]
            font-[Inter]
            transform transition duration-200 ease-in-out hover:scale-101 cursor-pointer
          "
          >
            Start trial
          </button>

        </div>
      </nav>

    </div>
  );
}