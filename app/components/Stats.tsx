"use client";

import { motion } from "framer-motion";

const stats = [


  {
    number: "100K+",
    label: "Data Points Analyzed",
  },

  {
    number: "88%",
    label: "Forecast Accuracy",
  },

  {
    number: "Top 1%",
    label: "National Level Analytics Hackathon: DecodeX'26 Hackathon",
  },
];

export default function Stats() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

        {stats.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-zinc-950 border border-white/10 rounded-3xl p-10 text-center"
          >

            <h2 className="text-4xl md:text-5xl font-black mb-4">
              {item.number}
            </h2>

            <p className="text-zinc-400">
              {item.label}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}