export default function Footer() {
  return (
    <footer
      className="
        border-t
        border-white/10
        bg-black
        text-zinc-500
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-10
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-6
        "
      >

        <h2 className="text-xl font-bold tracking-tight text-white">
          SHREYASH ANALYTICS
        </h2>

        <p>
          © 2026 Shreyash Gaikwad. All rights reserved.
        </p>

      </div>
    </footer>
  );
}