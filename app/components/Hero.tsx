"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="
        min-h-screen
        flex
        items-center
        px-6
        relative
        overflow-hidden
      "
    >

      {/* BLUR */}

      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full" />

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="uppercase tracking-[0.4em] text-zinc-500 text-sm mb-5">
            AI & Business Analytics Portfolio
          </p>

          <h1
            className="
              text-5xl
              md:text-7xl
              font-black
              leading-none
              text-gradient
            "
          >
            Hi, I’m
            <br />
            Shreyash
          </h1>

          <p
            className="
              mt-8
              text-lg
              text-zinc-400
              leading-8
              max-w-xl
            "
          >
            Building intelligent analytics systems,
            dashboards, AI workflows and scalable
            business solutions using Power BI,
            SQL, Python and Data Storytelling.
          </p>

          {/* BUTTON */}

          <div className="mt-10">

            <a
              href="/resume.pdf"
              download
              className="
                inline-flex
                items-center
                gap-3
                px-8
                py-4
                rounded-full
                bg-[#172033]
                hover:scale-105
                transition-all
                duration-300
              "
            >
              Download Resume
            </a>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <div
            className="
              w-[320px]
              h-[320px]
              md:w-[380px]
              md:h-[380px]
              rounded-full
              overflow-hidden
              border-4
              border-white/10
            "
          >

            <Image
              src="/profile.jpg"
              alt="profile"
              width={400}
              height={400}
              className="w-full h-full object-cover"
              priority
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}