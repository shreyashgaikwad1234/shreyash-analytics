"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="
        py-20
        bg-[#020617]
        text-white
        relative
        overflow-hidden
      "
    >

      {/* GRID BACKGROUND */}

      <div
        className="
          absolute
          inset-0
          opacity-10
          [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />

      {/* BLUR EFFECT */}

      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-14 items-center"
        >

          {/* LEFT SIDE */}

          <div>

            <p className="uppercase tracking-[0.4em] text-zinc-500 mb-5 text-sm">
              About Me
            </p>

            <h2
              className="
                text-3xl
                md:text-5xl
                font-black
                leading-[1.1]
                mb-6
              "
            >
              Business Analytics,
              <br />
              AI & Dashboard
              <br />
              Data Driven Insights
            </h2>

            <p
              className="
                text-zinc-400
                text-base
                md:text-lg
                leading-relaxed
                mb-6
                max-w-2xl
              "
            >
              I am Shreyash Gaikwad, an analytics professional with a passion for 
              data driven insights,
              Business Intelligence, AI systems and dashboard
              development. I build modern analytics solutions
              using Power BI, SQL, Python and AI-driven
              automation workflows.
            </p>

            <p
              className="
                text-zinc-500
                text-sm
                md:text-base
                leading-relaxed
                max-w-2xl
              "
            >
              My work includes forecasting dashboards,
              business intelligence systems, AI-powered
              platforms and data-driven analytical solutions
              designed for impactful decision making.
            </p>

          </div>

          {/* RIGHT SIDE */}

          <div
            className="
              border
              border-white/10
              rounded-[30px]
              p-8
              bg-zinc-950/70
              backdrop-blur-xl
            "
          >

            <div className="grid grid-cols-2 gap-5">

              <div className="border border-white/10 rounded-2xl p-5">
                <p className="text-zinc-500 mb-2 text-sm">
                  Focus
                </p>

                <h3 className="text-xl font-bold">
                  Analytics
                </h3>
              </div>

              <div className="border border-white/10 rounded-2xl p-5">
                <p className="text-zinc-500 mb-2 text-sm">
                  Specialization
                </p>

                <h3 className="text-xl font-bold">
                  Power BI
                </h3>
              </div>

              <div className="border border-white/10 rounded-2xl p-5">
                <p className="text-zinc-500 mb-2 text-sm">
                  Stack
                </p>

                <h3 className="text-xl font-bold">
                  SQL + Python
                </h3>
              </div>

              <div className="border border-white/10 rounded-2xl p-5">
                <p className="text-zinc-500 mb-2 text-sm">
                  Domain
                </p>

                <h3 className="text-xl font-bold">
                  AI Systems
                </h3>
              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}