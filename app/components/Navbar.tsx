export default function Navbar() {
  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        backdrop-blur-xl
        bg-black/30
        border-b
        border-white/10
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-5
          flex
          items-center
          justify-between
        "
      >
        <h1 className="text-3xl font-black tracking-tight">
          SHREYASH
        </h1>

        <nav className="flex items-center gap-10 text-lg">
          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>

          <a href="#experience" className="hover:text-blue-400 transition">
            Experience
          </a>

          <a href="#projects" className="hover:text-blue-400 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}