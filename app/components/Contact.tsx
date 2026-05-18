export default function Contact() {
  return (
    <section
      id="contact"
      className="
        py-32
        bg-black
        text-white
        relative
        overflow-hidden
      "
    >
      {/* GLOW */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[140px]" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">

        <p className="uppercase tracking-[0.4em] text-zinc-500 mb-5">
          Contact
        </p>

        <h2
          className="
            text-5xl
            md:text-7xl
            font-black
            leading-none
          "
        >
          Let’s Build
          <br />
          Something Amazing
        </h2>

        <p
          className="
            text-zinc-400
            text-xl
            leading-relaxed
            mt-10
            max-w-3xl
            mx-auto
          "
        >
          Open for internships, analytics projects,
          dashboard development, AI systems and
          business intelligence collaborations.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-14">

          <a
            href="mailto:gaikwadshreyash845@gmail.com"
            className="
              px-8
              py-4
              rounded-full
              bg-white
              text-black
              font-semibold
              hover:scale-105
              transition-all
            "
          >
            Email Me
          </a>

          <a
            href="https://linkedin.com/in/shreyash-gaikwad-91a177366"
            target="_blank"
            className="
              px-8
              py-4
              rounded-full
              border
              border-white/10
              bg-white/5
              hover:bg-white/10
              transition-all
            "
          >
            LinkedIn
          </a>

        </div>

      </div>
    </section>
  );
}