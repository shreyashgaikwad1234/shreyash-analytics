"use client";

import { motion } from "framer-motion";

const education = [
  {
    degree: "B.Tech — Metallurgy & Material Science",

    college: "COEP Technological University Pune",

    year: "2023 - Present",

    desc:
      "Building strong foundations in analytical thinking, business intelligence, AI systems and data-driven problem solving.",
  },
];

const experience = [
  {
    role: "Data Analyst Intern",

    company: "Talent Corner HR Services",

    duration: "Jul 2025 - Aug 2025",

    description:
      "Developed forecasting dashboards and data-driven analytical solutions for strategic business decisions.",
  },

  {
    role: "Market Analyst Intern",

    company: "Talent Corner HR Services",

    duration: "May 2025 - Jul 2025",

    description:
      "Conducted market research, analytics and business intelligence reporting using Power BI and Excel.",
  },
];

export default function Timeline() {
  return (
    <section
      id="experience"
      className="
        py-20
        bg-black
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

      {/* LIGHT EFFECTS */}

      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* HEADING */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14"
        >

          <p className="uppercase tracking-[0.35em] text-zinc-500 mb-3 text-xs">
            Career Journey
          </p>

          <h2
            className="
              text-3xl
              md:text-4xl
              font-black
              leading-tight
            "
          >
            Education &
            <br />
            Experience
          </h2>

        </motion.div>

        {/* MAIN GRID */}

        <div className="grid lg:grid-cols-2 gap-8">

          {/* EDUCATION */}

          <div>

            <p className="uppercase tracking-[0.3em] text-zinc-500 mb-6 text-xs">
              Education
            </p>

            <div className="space-y-5">

              {education.map((item, index) => (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="
                    bg-zinc-950/80
                    border
                    border-white/10
                    rounded-[24px]
                    p-6
                    backdrop-blur-xl
                    hover:border-blue-500/20
                    transition-all
                  "
                >

                  <p className="text-zinc-500 text-sm mb-3">
                    {item.year}
                  </p>

                  <h3 className="text-2xl font-bold leading-snug">
                    {item.degree}
                  </h3>

                  <p className="text-blue-400 text-base mt-4">
                    {item.college}
                  </p>

                  <p className="text-zinc-500 mt-5 leading-relaxed text-sm">
                    {item.desc}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

          {/* EXPERIENCE */}

          <div>

            <p className="uppercase tracking-[0.3em] text-zinc-500 mb-6 text-xs">
              Experience
            </p>

            <div className="space-y-5">

              {experience.map((item, index) => (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="
                    bg-zinc-950/80
                    border
                    border-white/10
                    rounded-[24px]
                    p-6
                    backdrop-blur-xl
                    hover:border-purple-500/20
                    transition-all
                  "
                >

                  <p className="text-zinc-500 text-sm mb-3">
                    {item.duration}
                  </p>

                  <h3 className="text-2xl font-bold leading-snug">
                    {item.role}
                  </h3>

                  <p className="text-purple-400 text-base mt-4">
                    {item.company}
                  </p>

                  <p className="text-zinc-400 text-sm leading-relaxed mt-5">
                    {item.description}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}