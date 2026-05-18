"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    title: "Revenue Forecasting",
    description:
      "Built 5-year forecasting systems and What-If models for strategic business growth planning.",
  },

  {
    title: "Business Intelligence",
    description:
      "Designed Power BI dashboards with advanced DAX, KPI tracking and scenario analytics.",
  },

  {
    title: "Market Analytics",
    description:
      "Performed TAM/SAM/SOM analysis and identified expansion opportunities using data-driven insights.",
  },
];

export default function Dashboard() {
  return (
    <section
      id="dashboard"
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

      {/* GLOW */}

      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* HEADING */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12"
        >

          <p className="uppercase tracking-[0.35em] text-zinc-500 mb-3 text-xs">
            Analytics Overview
          </p>

          <h2 className="text-3xl md:text-4xl font-black">
            Core Expertise
          </h2>

        </motion.div>

        {/* CARDS */}

        <div className="grid md:grid-cols-3 gap-6">

          {highlights.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="
                bg-zinc-950/80
                border
                border-white/10
                rounded-[28px]
                p-7
                backdrop-blur-xl
                hover:border-blue-500/30
                transition-all
                duration-300
              "
            >

              <h3 className="text-2xl font-bold leading-tight mb-4">
                {item.title}
              </h3>

              <p className="text-zinc-400 text-sm leading-relaxed">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}